import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';

import Footer from '@components/Footer';
import Loader from '@components/Loader';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';
import SvgLogoBlack from 'public/static/icons/logo.svg';

import { siteUrls } from 'constants/index';

const initialState = { loading: false, email: '', password: '', error: '', success: false };

export default function Signup() {
	const [state, setState] = useState(initialState);
	const emailInputElement = useRef(null);
	const passwordInputElement = useRef(null);
	const user = useUser();

	const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
	const signInUrl = isProduction ? siteUrls.signin : siteUrls.localSignin;
	const homeUrl = isProduction ? `https://${siteUrls.home}` : `http://${siteUrls.local}`;

	useEffect(() => {
		if (user) window.location.assign('/');
	}, [user]);

	useEffect(() => {
		emailInputElement.current?.focus();
	}, []);

	const handleSignup = async () => {
		setState((prev) => ({ ...prev, loading: true, error: '', success: false }));

		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				body: JSON.stringify({ email: state.email, password: state.password }),
				headers: { 'Content-Type': 'application/json' },
			});

			if (!res.ok) {
				const error = await res.json();
				throw new Error(error.message);
			}
			setState((prev) => ({ ...prev, success: true, loading: false, email: '' }));
		} catch (error) {
			setState((prev) => ({ ...prev, error: error.message, loading: false }));
		}
	};

	return (
		<>
			<Head>
				<title>Đăng ký tài khoản Quanlychitieu.fun</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			</Head>
			<main
				className={`font-default relative m-auto flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50 pl-2 pr-2`}
			>
				<div className="absolute inset-x-0 top-0 z-10 h-96 overflow-hidden text-slate-600/40 opacity-10 [mask-image:linear-gradient(to_top,transparent,white)]">
					<div className="">
						<svg className="absolute inset-0 top-0 h-full w-full text-gray-800" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<pattern
									id="pricing-pattern"
									width="32"
									height="32"
									patternUnits="userSpaceOnUse"
									x="50%"
									y="100%"
									patternTransform="translate(0 -1)"
								>
									<path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
								</pattern>
							</defs>
							<rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
						</svg>
					</div>
				</div>
				<div className="absolute z-50 flex w-[380px] flex-1 flex-col justify-center p-6 sm:w-[468px] sm:p-10">
					<Link href={homeUrl}>
						<h1 className="flex flex-col items-center text-3xl text-black">
							<Image src={SvgLogoBlack} width={50} height={50} alt="Quanlychitieu.fun" />
							<span className="mt-2 font-black">Quanlychitieu.fun</span>
						</h1>
					</Link>
					<p className="mb-6 mt-3 text-center text-sm font-medium text-zinc-600">Đăng ký sử dụng miễn phí.</p>
					<form
						className="grid w-full grid-cols-1 items-center gap-4"
						onSubmit={(event) => {
							event.preventDefault();
							handleSignup();
						}}
					>
						<label className="mb-1 block">
							<span className="block text-sm font-semibold leading-6 text-zinc-800">Địa chỉ Email</span>
							<input
								autoFocus
								className="mt-2 block h-11 w-full appearance-none rounded-md bg-white px-3 text-sm text-black shadow-sm ring-1 ring-gray-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
								type="email"
								placeholder="nguyenvana@gmail.com"
								required
								value={state.email}
								onChange={(event) => {
									setState({ ...state, email: event.target.value });
								}}
								ref={emailInputElement}
							/>
						</label>
						<label className="mb-1 block">
							<span className="block text-sm font-semibold leading-6 text-zinc-800">Mật khẩu</span>
							<input
								autoFocus
								className="mt-2 block h-11 w-full appearance-none rounded-md bg-white px-3 text-sm text-black shadow-sm ring-1 ring-gray-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
								type="password"
								placeholder="Mật khẩu"
								required
								value={state.password}
								onChange={(event) => {
									setState({ ...state, password: event.target.value });
								}}
								ref={passwordInputElement}
							/>
						</label>
						<button
							type="submit"
							className="flex h-[44px] items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 font-medium text-white hover:bg-zinc-700"
							disabled={state.loading}
						>
							{state.loading ? (
								<>
									<Loader />
								</>
							) : (
								'Đăng ký'
							)}
						</button>

						<p className="text-center text-sm font-medium text-zinc-700">
							Đã có tài khoản?{' '}
							<Link
								href={signInUrl}
								className="border-b-[1px] border-zinc-700 pb-[1px] font-bold hover:border-zinc-500 hover:text-zinc-600"
							>
								Đăng nhập ngay
							</Link>{' '}
						</p>

						<p
							className={`mb-6 h-[50px] text-center text-sm font-medium ${
								(state.success && !state.error) || (!state.success && state.error) ? '' : 'invisible'
							}`}
						>
							{state.success && !state.error ? (
								<span className="text-green-700">Đã gửi email xác nhận, hãy kiểm tra hộp thư đến của bạn.</span>
							) : null}

							{!state.success && state.error ? <span className="text-red-500">{state.error}</span> : null}
						</p>
					</form>
				</div>
				<Footer className={'absolute bottom-0'} />
			</main>
		</>
	);
}

export const getServerSideProps = async (context) => {
	const supabase = createPagesServerClient(context);

	const { data } = await supabase.auth.getSession();
	const { session } = data;

	if (session) {
		return {
			redirect: { destination: '/', permanent: true },
		};
	}

	return {
		props: {},
	};
};
