import { NextApiRequest, NextApiResponse } from 'next';

import { toastMessages } from '@components/Toast';
import { basicPlanUsageLimit, premiumPlanUsageLimit, sentFromEmailId, tierNames } from '@constants/index';
import PlanExpiredEmail from '@emails/PlanExpiredEmail';
import UsageExceededEmail from '@emails/UsageExceededEmail';
import resend from '@lib/email';
import prisma from '@lib/prisma';
import { User, createPagesServerClient } from '@supabase/auth-helpers-nextjs';

import { hasBasicUsageLimitReached, hasPremiumBillingCycleEnded, hasPremiumUsageLimitReached } from './usage';

const userSelect = {
	usage: true,
	billing_start_date: true,
	plan_status: true,
	order_status: true,
	basic_usage_limit_email: true,
	premium_usage_limit_email: true,
	premium_plan_expired_email: true,
};

const defaultOptions = { allow: false };

export type UserAuthHandler<T = any> = (
	req: NextApiRequest,
	res: NextApiResponse<T>,
	user: User
) => unknown | Promise<unknown>;

export const withUserAuth = (handler: UserAuthHandler, options = defaultOptions) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		let authTokenKey: string;
		for (const key of Object.keys(req.cookies)) {
			if (key.includes('auth-token')) authTokenKey = key;
		}
		const authToken: string = JSON.parse(req.cookies[authTokenKey])?.[0];
		const supabaseServerClient = createPagesServerClient({ req, res });
		const { data } = await supabaseServerClient.auth.getUser(authToken);
		const { user } = data;

		if (!user) {
			return res.status(401).json({ message: 'Unauthorized request' });
		}

		// To get data from public user table
		const userData = await prisma.users.findUnique({ where: { id: user.id }, select: userSelect });

		const {
			billing_start_date,
			plan_status,
			usage,
			order_status,
			basic_usage_limit_email,
			premium_usage_limit_email,
			premium_plan_expired_email,
		} = JSON.parse(JSON.stringify(userData));

		const isBasicPlan = plan_status === tierNames.basic.key;
		const isPremiumPlan = order_status === 'paid' && plan_status === tierNames.premium.key;
		const hasBasicPlanLimitReached = isBasicPlan && hasBasicUsageLimitReached(usage);
		const hasPremiumPlanExpired = isPremiumPlan && hasPremiumBillingCycleEnded(billing_start_date);
		const hasPremiumPlanLimitReached = !hasPremiumPlanExpired && hasPremiumUsageLimitReached(usage);

		if (options.allow) {
			return handler(req, res, user);
		}

		if (hasBasicPlanLimitReached && req.method !== 'GET') {
			if (!basic_usage_limit_email) {
				try {
					await resend.sendEmail({
						from: sentFromEmailId,
						subject: 'Your Basic Plan usage exceeded!',
						to: user.email,
						react: <UsageExceededEmail maxUsageLimit={basicPlanUsageLimit} plan="Basic Plan" />,
					});
					await prisma.users.update({ where: { id: user.id }, data: { basic_usage_limit_email: true } });
				} catch (error) {
					return res.status(500).json({ message: toastMessages.error });
				}
			}
			return res.status(403).json({ message: 'Your basic plan limit is reached, upgrade to premium plan.' });
		}

		if (hasPremiumPlanExpired && req.method !== 'GET') {
			if (!premium_plan_expired_email) {
				try {
					await resend.sendEmail({
						from: sentFromEmailId,
						subject: 'Your Premium Plan Expired!',
						to: user.email,
						react: <PlanExpiredEmail />,
					});
					await prisma.users.update({ where: { id: user.id }, data: { premium_plan_expired_email: true } });
				} catch (error) {
					return res.status(500).json({ message: toastMessages.error });
				}
			}
			return res.status(403).json({ message: 'Your premium plan has expired, renew to continue.' });
		}

		if (hasPremiumPlanLimitReached && req.method !== 'GET') {
			if (!premium_usage_limit_email) {
				try {
					await resend.sendEmail({
						from: sentFromEmailId,
						subject: 'Your Premium Plan usage exceeded!',
						to: user.email,
						react: <UsageExceededEmail maxUsageLimit={premiumPlanUsageLimit} plan="Premium Plan" />,
					});
					await prisma.users.update({ where: { id: user.id }, data: { premium_usage_limit_email: true } });
				} catch (error) {
					return res.status(500).json({ message: toastMessages.error });
				}
			}
			return res.status(403).json({ message: 'Your premium plan limit is reached, renew again to continue.' });
		}

		return handler(req, res, user);
	};
};
