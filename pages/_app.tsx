import Router from 'next/router';
import Script from 'next/script';

import { useEffect, useState } from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from '@components/Layout';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import NProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

import fetcher from 'lib/fetcher';

import 'styles/globals.css';

import 'nprogress/nprogress.css';

export default function App({ Component, pageProps }) {
	const [supabaseClient] = useState(() => createPagesBrowserClient());

	useEffect(() => {
		NProgress.configure({ showSpinner: false });
		Router.events.on('routeChangeStart', () => NProgress.start());
		Router.events.on('routeChangeComplete', () => NProgress.done());
		Router.events.on('routeChangeError', () => NProgress.done());
	}, []);

	const isAuthenticated = pageProps.initialSession && pageProps.initialSession.user;

	return (
		<SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
			<SWRConfig value={{ fetcher }}>
				<Script
					id="Adsense-id"
					async
					onError={(e) => {
						console.error('Script failed to load', e);
					}}
					strategy="afterInteractive"
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6254144234932394"
					crossOrigin="anonymous"
				/>
				{isAuthenticated ? (
					<Tooltip.Provider delayDuration={500}>
						<Layout user={pageProps.user}>
							<Component {...pageProps} />
						</Layout>
					</Tooltip.Provider>
				) : (
					<Component {...pageProps} />
				)}
				<Toaster />
			</SWRConfig>
		</SessionContextProvider>
	);
}
