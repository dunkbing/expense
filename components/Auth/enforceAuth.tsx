import { GetServerSideProps } from 'next';

import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';

import prisma from 'lib/prisma';
import { hasPremiumBillingCycleEnded } from 'lib/usage';

import { tierNames } from 'constants/index';

export default function enforceAuth(): GetServerSideProps {
	return async (context) => {
		const supabase = createPagesServerClient(context);

		// Get auth table info
		const { data } = await supabase.auth.getSession();
		const { session } = data;

		if (!session) {
			return {
				redirect: { destination: '/signin', permanent: true },
			};
		}

		// Get public user table info
		const serializedUserData = JSON.parse(
			JSON.stringify(
				await prisma.users.findUnique({
					where: { id: session.user.id },
					select: {
						currency: true,
						locale: true,
						billing_start_date: true,
						trial_start_date: true,
						order_status: true,
						usage: true,
						email: true,
						plan_status: true,
						new_signup_email: true,
					},
				})
			)
		);

		// If its new signup, send welcome email once and update bool
		if (!serializedUserData.new_signup_email) {
			try {
				// await resend.sendEmail({
				// 	from: sentFromEmailId,
				// 	subject: '✨ Welcome to Quanlychitieu.fun',
				// 	to: session.user.email,
				// 	react: <WelcomeEmail />,
				// });
				await prisma.users.update({ where: { id: session.user.id }, data: { new_signup_email: true } });
			} catch (error) {
				throw error;
			}
		}

		const isBasicPlan = serializedUserData.plan_status === tierNames.basic.key;
		const isPremiumPlan =
			serializedUserData.order_status === 'paid' && serializedUserData.plan_status === tierNames.premium.key;
		const isPremiumPlanEnded = isPremiumPlan && hasPremiumBillingCycleEnded(serializedUserData.billing_start_date);

		return {
			props: {
				initialSession: session,
				user: {
					...serializedUserData,
					isBasicPlan,
					isPremiumPlan,
					isPremiumPlanEnded,
				},
			},
		};
	};
}
