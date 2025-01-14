import Head from 'next/head';
import Script from 'next/script';

import enforceAuth from '@components/Auth/enforceAuth';
import Billing from '@components/Settings/Billing';
import General from '@components/Settings/General';
import Usage from '@components/Settings/Usage';
import SettingsLayout from '@components/SettingsLayout';

import { onDismiss, onSuccess, paymentEvents } from 'lib/payments';

const eventHandler = async ({ event, data }) => {
	if (event === paymentEvents.success) {
		await onSuccess(data, (window as any).LemonSqueezy?.Url?.Close);
	} else if (event === paymentEvents.closed) {
		onDismiss();
	} else {
		console.warn(`Unhandled event: ${event}`);
	}
	return;
};

export default function Settings({ user }) {
	const setupLemonSqueezy = () => {
		(window as any).createLemonSqueezy?.();
		(window as any).LemonSqueezy?.Setup?.({ eventHandler });
	};

	return (
		<>
			<Head>
				<title>Quanlychitieu.fun - Cài đặt</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			</Head>

			<Script src="https://app.lemonsqueezy.com/js/lemon.js" async onLoad={setupLemonSqueezy} />

			<div className="h-ful mb-20">
				<h1 className="mb-4 text-2xl font-extrabold text-black max-sm:mb-4 max-sm:ml-[45px]">Cài đặt</h1>
				<SettingsLayout>
					<General user={user} />
					<Usage user={user} />
					<Billing user={user} />
				</SettingsLayout>
			</div>
		</>
	);
}

export const getServerSideProps = enforceAuth();
