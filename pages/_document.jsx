import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="Dễ dàng theo dõi và quản lý các khoản chi phí." />
				<meta name="application-name" content="Quanlychitieu.fun" />
				<meta name="theme-color" content="#e2f3fe" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Quanlychitieu.fun" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#e2f3fe" />
				<meta name="msapplication-TileColor" content="#e2f3fe" />
				<meta name="msapplication-TileImage" content="/static/icons/mstile-150x150.png" />
				<meta name="msapplication-navbutton-color" content="#e2f3fe" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta property="og:title" content="quanlychitieu.fun" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Dễ dàng theo dõi và quản lý các khoản chi phí." />
				<meta property="og:url" content="https://quanlychitieu.fun/" />
				<meta property="og:image" content="https://quanlychitieu.fun/static/og.jpg" />
				<meta property="og:video" content="https://quanlychitieu.fun/static/demo.mp4" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Quanlychitieu.fun" />
				<meta name="twitter:image" content="https://quanlychitieu.fun/static/og.jpg" />
				<meta name="twitter:site" content="@gokul_i" />
				<meta name="twitter:url" content="https://quanlychitieu.fun/" />
				<meta name="twitter:description" content="Dễ dàng theo dõi và quản lý các khoản chi phí." />
				<meta name="google-site-verification" content="ojKd1typnE6YezWzbRIkqBOjYKX1KMRs374I4QCMkrk" />
				<meta name="google-site-verification" content="xJHumtLuemPl4mBU8BN5g0t5qp4OShdj6AnF318EOCc" />
				<link href="/static/icons/icon.svg" rel="icon" type="image/svg+xml" />
				<link href="/static/icons/favicon.ico" rel="alternate icon" sizes="any" />
				<link href="/static/icons/apple-touch-icon.png" rel="apple-touch-icon" />
				<link rel="manifest" href="/static/manifest.json" />
			</Head>
			<body className="font-default flex h-full flex-col text-gray-600 antialiased">
				<Main />
				<div id="modal-root"></div>
				<NextScript />
			</body>
		</Html>
	);
}
