import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import { useState } from 'react';

import Footer from '@components/Footer';
import Logo from '@components/Logo';
import Basic from '@components/Plans/Basic';
import Premium from '@components/Plans/Premium';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

import { siteUrls, tiers } from 'constants/index';

const features = [
	{
		name: 'Sự riêng tư',
		description:
			'Dữ liệu riêng tư của bạn, chẳng hạn như tên, giá và ghi chú, v.v., được mã hóa an toàn trong cơ sở dữ liệu.',
		Icon: () => (
			<svg
				className="ml-[-6px] mr-2 mt-[-1px]"
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				width="20"
				fill="currentColor"
			>
				<path d="M5.083 18.333q-.729 0-1.239-.521-.511-.52-.511-1.25V8.417q0-.729.511-1.24.51-.51 1.239-.51h.709V5.042q0-1.771 1.218-2.99Q8.229.833 10 .833q1.771 0 2.99 1.219 1.218 1.219 1.218 2.99v1.625h.709q.729 0 1.239.51.511.511.511 1.24v8.145q0 .73-.511 1.25-.51.521-1.239.521ZM7.542 6.667h4.916V5.042q0-1.021-.718-1.74-.719-.719-1.74-.719t-1.74.719q-.718.719-.718 1.74Zm-2.459 9.916h9.834V8.417H5.083v8.166Zm0-8.166v8.166-8.166ZM10 15.812q.354 0 .615-.26.26-.26.26-.614v-1.584h1.583q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261h-1.583v-1.583q0-.354-.26-.615-.261-.26-.615-.26t-.615.26q-.26.261-.26.615v1.583H7.542q-.354 0-.615.261-.26.26-.26.614t.26.615q.261.26.615.26h1.583v1.584q0 .354.26.614.261.26.615.26Z" />
			</svg>
		),
		screenshotUrl: '/static/demo/expenses.jpg',
	},
	{
		name: 'Báo cáo',
		description: 'Giúp bạn hiểu thói quen chi tiêu của mình bằng cách xem các báo cáo chi tiết trên trang tổng quan.',
		Icon: () => (
			<svg
				className="ml-[-6px] mr-2 mt-[1px]"
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				width="20"
				fill="currentColor"
			>
				<path d="M10 13.5q1.458 0 2.479-1.021Q13.5 11.458 13.5 10q0-1.458-1.021-2.479Q11.458 6.5 10 6.5q-1.458 0-2.479 1.021Q6.5 8.542 6.5 10q0 1.458 1.021 2.479Q8.542 13.5 10 13.5Zm0-1.5q-.833 0-1.417-.583Q8 10.833 8 10q0-.833.583-1.417Q9.167 8 10 8q.833 0 1.417.583Q12 9.167 12 10q0 .833-.583 1.417Q10.833 12 10 12Zm0 4q-2.979 0-5.417-1.635Q2.146 12.729 1 10q1.146-2.729 3.583-4.365Q7.021 4 10 4q2.979 0 5.417 1.635Q17.854 7.271 19 10q-1.146 2.729-3.583 4.365Q12.979 16 10 16Zm0-6Zm0 4.5q2.333 0 4.312-1.208 1.98-1.209 3.042-3.292-1.062-2.083-3.042-3.292Q12.333 5.5 10 5.5T5.688 6.708Q3.708 7.917 2.646 10q1.062 2.083 3.042 3.292Q7.667 14.5 10 14.5Z" />
			</svg>
		),
		screenshotUrl: '/static/demo/overview.jpg',
	},
	{
		name: 'Trả góp định kỳ',
		description: 'Dễ dàng theo dõi trả góp; không cần phải nhớ ngày gia hạn hoặc duy trì một bảng tính lộn xộn.',
		Icon: () => (
			<svg
				className="ml-[-6px] mr-2 mt-[1px]"
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				width="20"
				fill="currentColor"
			>
				<path d="M6.708 3.417q-.354 0-.614-.261-.261-.26-.261-.614t.261-.615q.26-.26.614-.26h6.584q.354 0 .614.26.261.261.261.615t-.261.614q-.26.261-.614.261Zm-2.458 2.5q-.354 0-.615-.261-.26-.26-.26-.614t.26-.615q.261-.26.615-.26h11.521q.354 0 .614.26.261.261.261.615t-.261.614q-.26.261-.614.261Zm-.833 12.416q-.729 0-1.24-.51-.51-.511-.51-1.24V8.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v8.166q0 .729-.51 1.24-.511.51-1.24.51Zm0-1.75h13.166V8.417H3.417v8.166Zm6.25-1.604 2.625-1.75q.396-.271.406-.729.01-.458-.386-.729l-2.645-1.75q-.438-.292-.896-.042-.459.25-.459.771v3.5q0 .542.459.781.458.24.896-.052Zm-6.25-6.583v8.187-8.187Z" />
			</svg>
		),
		screenshotUrl: '/static/demo/subscriptions.jpg',
		demoUrl: '/static/demo/subscriptions.mp4',
	},

	{
		name: 'Đa thiết bị & Đa nền tảng',
		description:
			'Truy cập từ nhiều thiết bị, bao gồm cả điện thoại thông minh và máy tính xách tay, giúp bạn dễ dàng theo dõi chi phí khi đang di chuyển từ bất kỳ thiết bị nào.',
		Icon: () => (
			<svg
				className="ml-[-6px] mr-2 mt-[1px]"
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				width="20"
				fill="currentColor"
			>
				<path d="M5.5 19q-.625 0-1.062-.438Q4 18.125 4 17.5v-15q0-.625.438-1.062Q4.875 1 5.5 1h9q.625 0 1.062.438Q16 1.875 16 2.5v15q0 .625-.438 1.062Q15.125 19 14.5 19Zm0-2.5v1h9v-1Zm0-1.5h9V5h-9Zm0-11.5h9v-1h-9Zm0 0v-1 1Zm0 13v1Z" />
			</svg>
		),
		screenshotUrl: '/static/demo/responsive.jpg',
	},
	{
		name: 'Xuất dữ liệu',
		description: 'Xuất dữ liệu của bạn ở định dạng tệp CSV được hỗ trợ rộng rãi, và có thể mở bằng excel',
		Icon: () => (
			<svg
				className="ml-[-6px] mr-2 mt-[1px] h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
				height="24"
				width="24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				></path>
			</svg>
		),
		screenshotUrl: '/static/demo/export.jpg',
		demoUrl: '/static/demo/export.mp4',
	},
];

export default function Home() {
	const [state, setState] = useState({ subscription: 'y', y: { ...tiers.yearly } });
	const [selectedFeature, setSelectedFeature] = useState(0);

	const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
	const signUpUrl = isProduction ? siteUrls.signup : siteUrls.localSignup;
	const signInUrl = isProduction ? siteUrls.signin : siteUrls.localSignin;

	return (
		<>
			<Head>
				<title>Quanlychitieu.fun – Dễ dàng theo dõi và quản lý các khoản chi phí.</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			</Head>

			<div
				className={`font-default relative bg-gradient-to-br from-sky-100 via-white to-sky-50 pl-2 pr-2 text-zinc-800`}
			>
				<div className="relative m-auto h-[56px] max-w-4xl pt-3">
					<header className="absolute left-0 right-0 top-3 z-20 flex items-center justify-between">
						<Link href="/" className="flex max-w-[180px] items-center p-3 text-2xl text-black">
							<Logo w={30} h={30} />
						</Link>

						<Link
							href={signInUrl}
							className="leading-2 mr-4 inline-flex h-[36px] items-center overflow-hidden rounded-full bg-zinc-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-zinc-700"
						>
							Đăng nhập
						</Link>
					</header>
				</div>
				<div className="relative">
					<div className="absolute inset-x-0 top-[-55px] z-10 h-96 overflow-hidden text-slate-600/40 opacity-10 [mask-image:linear-gradient(to_top,transparent,white)]">
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
				</div>
				<div className="relative z-10 m-auto max-w-5xl pt-4">
					<div className="mx-auto mb-16 mt-16 max-w-md px-3 text-center sm:max-w-lg sm:px-0">
						<h1 className="mt-4	text-4xl font-black leading-[1.15] tracking-[-0.03em] text-black sm:text-5xl sm:leading-[1.15]">
							Dễ dàng theo dõi và quản lý{' '}
							<span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
								các khoản chi phí.
							</span>
						</h1>
						<p className="font-default mt-5 text-base  leading-7 sm:text-lg">
							Nền tảng dễ sử dụng, cho phép bạn theo dõi và phân loại các khoản chi tiêu của mình, mang đến cho bạn bức
							tranh rõ ràng về tình hình tài chính của mình.
						</p>
						<p className="font-default mt-2 hidden text-base leading-7 sm:text-lg">
							Đăng ký ngay hôm nay và kiểm soát tài chính của bạn một cách dễ dàng!
						</p>
						<div className="mt-12 flex justify-center">
							<Link
								href={signUpUrl}
								className="inline-flex h-[36px] items-center justify-center rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 hover:shadow"
							>
								Miễn phí sử dụng
							</Link>
						</div>
					</div>

					<div className="mx-auto mb-16 mt-16 max-w-md px-3 text-center sm:max-w-lg sm:px-0">
						<h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-black sm:text-4xl">
							<span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
								Tại sao nên dùng
							</span>{' '}
							Quanlychitieu.fun?
						</h2>
						<ul className="mt-6 list-decimal px-4 text-left leading-6 [counter-reset:section] sm:px-2">
							<li className="before::h-2 font-default mt-4 text-base  sm:text-lg">
								<b className="font-sans font-bold text-black">Dễ sử dụng:</b>Theo dõi chi phí với phân loại và ghi nhật
								ký.
							</li>
							<li className="before::h-2 font-default mt-4 text-base  sm:text-lg">
								<b className="font-sans font-bold text-black">Thông tin chi tiết dựa trên dữ liệu:</b> Trình theo dõi
								chi phí có thể cung cấp thông tin chi tiết có giá trị về thói quen chi tiêu của bạn, cho phép bạn đưa ra
								quyết định sáng suốt hơn.
							</li>
							<li className="before::h-2 font-default mt-4 text-base  sm:text-lg">
								<b className="font-sans font-bold text-black">Xác định bội chi:</b> Kiểm soát tài chính của bạn bằng
								cách xác định và giảm bội chi với công cụ theo dõi chi phí.
							</li>
							<li className="before::h-2 font-default mt-4 text-base  sm:text-lg">
								<b className="font-sans font-bold text-black">Hiển thị thời gian thực:</b> Theo dõi chi phí của bạn
								trong thời gian thực, cho dù bạn đang ở nhà hay đang di chuyển, với giao diện thân thiện với người dùng
							</li>
						</ul>
					</div>
				</div>
				<div className="mx-auto mb-16 mt-16 max-w-2xl px-3 ">
					<h2 className="mb-12 mt-8 text-center text-3xl font-extrabold tracking-[-0.03em] text-black sm:text-4xl">
						Đơn giản, nhưng{' '}
						<span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
							Nhiều tính năng
						</span>{' '}
					</h2>
					<div className="mt-10 grid grid-cols-1 justify-center gap-10 p-5 lg:grid-cols-2 lg:gap-20">
						<div className="mx-auto block h-fit max-w-sm rounded-2xl  border-[1px] bg-white p-2 sm:w-96 lg:ml-[-50px]">
							{features.map((feature, index) => {
								const isSelected = index === selectedFeature;
								return (
									<div key={`${feature.name}-${index}`}>
										<button
											className={
												'flex w-full justify-between rounded-lg bg-orange-100 px-4 py-3 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75'
											}
											onClick={() => {
												setSelectedFeature(index);
											}}
										>
											<div className="flex w-full items-center justify-between ">
												<div className="flex w-full items-center justify-between">
													<div className="flex items-center">
														<feature.Icon />
														<h3 className="font-sans font-medium text-black">{feature.name}</h3>
													</div>
													{
														<ChevronUpIcon
															className={`${isSelected ? 'rotate-180 transform' : ''} h-5 w-5 text-orange-600`}
														/>
													}
												</div>
											</div>
										</button>
										<p
											className={`mb-[6px] mt-[6px] overflow-hidden  border-zinc-600 bg-white pl-[10px] text-[14px] font-medium text-zinc-600 transition-all duration-500 ${
												isSelected ? 'max-h-28' : 'max-h-0'
											} `}
										>
											{feature.description}
										</p>
									</div>
								);
							})}
						</div>
						<div className="relative max-w-xl overflow-hidden whitespace-nowrap rounded-md border-[1px] bg-white shadow-lg lg:mt-[30px] lg:h-[360px] lg:w-[900px]">
							<video
								playsInline
								autoPlay
								muted
								loop
								width="1200"
								height="400"
								src={
									features[selectedFeature].demoUrl
										? features[selectedFeature].demoUrl
										: features[selectedFeature].screenshotUrl
								}
								poster={features[selectedFeature].screenshotUrl}
							>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
				{/* <div className="mx-auto mb-16 mt-16 grid max-w-md justify-center px-3 text-center sm:px-0 md:max-w-[600px]">
					<h2 className="mt-0 text-3xl font-extrabold tracking-[-0.03em] text-black sm:text-4xl">
						Our{' '}
						<span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
							Pricing Plans
						</span>
					</h2>
					<p className="font-default mt-3 text-base leading-7 sm:text-lg">
						Start for free, no credit card is required.
					</p>
					<div className="relative mb-4 mt-4 hidden min-w-[245px] justify-center">
						<div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-0.5">
							<div className="flex">
								<button
									onClick={() => {
										setState({ ...state, subscription: 'm' });
									}}
									className={`relative m-1 w-[125px] whitespace-nowrap rounded-3xl border-zinc-800 py-2 text-sm  text-white shadow-sm hover:bg-zinc-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 sm:px-8 ${
										state.subscription === 'm' ? 'bg-zinc-700' : ''
									}`}
								>
									Monthly
								</button>
								<Link
									href={signUpUrl}
									className={`relative m-1 w-[125px] whitespace-nowrap rounded-3xl border-zinc-800 py-2 text-sm  text-white shadow-sm hover:bg-zinc-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 sm:px-8 ${
										state.subscription === 'y' ? 'bg-zinc-700' : ''
									}`}
								>
									Yearly
								</Link>
							</div>
						</div>
					</div>

					<div className="mt-8 flex w-full flex-col sm:flex-row">
						<Basic />
						<Premium />
					</div>
				</div> */}
				<Footer />
				{/* preload videos */}
				{features.map(({ name, demoUrl }) =>
					demoUrl ? <link key={name} rel="preload" as="video" href={demoUrl} /> : null
				)}
			</div>
		</>
	);
}
