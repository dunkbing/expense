import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Tooltip from '@radix-ui/react-tooltip';
import PlanBadge from '@components/Plans/PlanBadge';
import TooltipText from '@components/TooltipText';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useHotkeys } from 'react-hotkeys-hook';

import { supabase } from 'lib/supabase';

import { shortcuts } from 'constants/index';

import Logo from '../Logo';

export const OverviewIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M10.771 2.042q2.875.291 4.896 2.312t2.312 4.896h-5.583q-.229-.562-.646-.979-.417-.417-.979-.646Zm1.5 1.854v2.812q.291.23.562.48.271.25.479.562h2.813q-.5-1.354-1.5-2.354t-2.354-1.5Zm-3-1.854v5.583q-.771.292-1.261.927-.489.636-.489 1.448 0 .812.489 1.458.49.646 1.261.917v5.583q-3.104-.312-5.177-2.583Q2.021 13.104 2.021 10t2.073-5.385q2.073-2.282 5.177-2.573Zm-1.5 1.854q-1.917.75-3.083 2.406Q3.521 7.958 3.521 10q0 2.062 1.167 3.719 1.166 1.656 3.083 2.385v-2.812q-.792-.584-1.271-1.438Q6.021 11 6.021 10T6.5 8.146q.479-.854 1.271-1.438Zm4.625 6.854h5.583q-.291 2.875-2.312 4.896t-4.896 2.312v-5.583q.562-.229.989-.646.428-.417.636-.979Zm.916 1.5q-.208.312-.468.573-.261.26-.573.469v2.812q1.354-.5 2.354-1.5t1.5-2.354ZM6.021 10Zm7.291-2.25Zm0 4.5Z" />
	</svg>
);

export const ExpensesIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M5.083 18.333q-.729 0-1.239-.51-.511-.511-.511-1.24V3.417q0-.729.511-1.24.51-.51 1.239-.51h5.771q.354 0 .677.135.323.136.573.386l4.042 4.041q.25.25.385.573.136.323.136.677v9.104q0 .729-.511 1.24-.51.51-1.239.51Zm0-11.583V3.417v13.166V6.75ZM8.375 15q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h2.417v-.708H8.375q-.354 0-.615-.261-.26-.26-.26-.614V9.208q0-.354.26-.614.261-.261.615-.261h.75v-.041q0-.354.26-.615.261-.26.615-.26t.615.26q.26.261.26.615v.041h.75q.354 0 .615.261.26.26.26.614t-.26.615q-.261.26-.615.26H9.25v.709h2.375q.354 0 .615.26.26.26.26.615v2.458q0 .354-.26.615-.261.26-.615.26h-.75v.042q0 .354-.26.614-.261.261-.615.261t-.615-.261q-.26-.26-.26-.614V15Zm6.542-8.25H11.75q-.354 0-.615-.26-.26-.261-.26-.615V3.417H5.083v13.166h9.834Z" />
	</svg>
);

export const IncomeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M5 14q-.354 0-.615-.26-.26-.261-.26-.615V9.417q0-.355.26-.605.261-.25.615-.25t.615.261q.26.26.26.615v3.708q0 .354-.26.604Q5.354 14 5 14Zm5.021 0q-.354 0-.615-.26-.26-.261-.26-.615V9.417q0-.355.26-.605.261-.25.615-.25t.614.261q.261.26.261.615v3.708q0 .354-.261.604-.26.25-.614.25Zm-7.5 3.5q-.354 0-.604-.26-.25-.261-.25-.615t.26-.615q.261-.26.615-.26H17.5q.354 0 .604.26.25.261.25.615t-.26.615q-.261.26-.615.26Zm12.5-3.5q-.354 0-.615-.26-.26-.261-.26-.615V9.417q0-.355.26-.605.261-.25.615-.25t.614.261q.261.26.261.615v3.708q0 .354-.261.604-.26.25-.614.25ZM10.812 1.229l6.771 3.438q.334.166.552.448.219.281.219.635 0 .438-.312.75-.313.312-.771.312H2.729q-.437 0-.75-.312-.312-.312-.312-.75 0-.354.218-.635.219-.282.553-.448l6.791-3.438q.375-.208.792-.198.417.011.791.198ZM5.5 5.062h9.021Zm0 0h9.021l-4.5-2.27Z" />
	</svg>
);

export const SubscriptionsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M6.708 3.417q-.354 0-.614-.261-.261-.26-.261-.614t.261-.615q.26-.26.614-.26h6.584q.354 0 .614.26.261.261.261.615t-.261.614q-.26.261-.614.261Zm-2.458 2.5q-.354 0-.615-.261-.26-.26-.26-.614t.26-.615q.261-.26.615-.26h11.521q.354 0 .614.26.261.261.261.615t-.261.614q-.26.261-.614.261Zm-.833 12.416q-.729 0-1.24-.51-.51-.511-.51-1.24V8.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v8.166q0 .729-.51 1.24-.511.51-1.24.51Zm0-1.75h13.166V8.417H3.417v8.166Zm6.25-1.604 2.625-1.75q.396-.271.406-.729.01-.458-.386-.729l-2.645-1.75q-.438-.292-.896-.042-.459.25-.459.771v3.5q0 .542.459.781.458.24.896-.052Zm-6.25-6.583v8.187-8.187Z" />
	</svg>
);

export const SettingsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M11.583 18.333H8.417q-.334 0-.573-.218-.24-.219-.282-.553l-.229-1.854q-.208-.125-.458-.27-.25-.146-.458-.271l-1.729.729q-.313.125-.626.021-.312-.105-.479-.396l-1.562-2.729q-.167-.292-.094-.604.073-.313.323-.521l1.458-1.125V9.458L2.25 8.333q-.25-.208-.323-.521-.073-.312.094-.604l1.562-2.729q.167-.291.479-.396.313-.104.626.021l1.729.729q.208-.125.458-.27.25-.146.458-.271l.229-1.854q.042-.334.282-.553.239-.218.573-.218h3.166q.334 0 .573.218.24.219.282.553l.229 1.854q.208.125.458.271.25.145.458.27l1.729-.729q.313-.125.626-.021.312.105.479.396L18 7.208q.167.292.104.604-.062.313-.333.521l-1.459 1.125v1.084l1.459 1.125q.271.208.333.521.063.312-.104.604l-1.583 2.729q-.167.291-.479.396-.313.104-.626-.021l-1.729-.729q-.208.125-.458.271-.25.145-.458.27l-.229 1.854q-.042.334-.282.553-.239.218-.573.218ZM10 12.979q1.229 0 2.104-.875T12.979 10q0-1.229-.875-2.104T10 7.021q-1.229 0-2.104.875T7.021 10q0 1.229.875 2.104t2.104.875Zm0-1.75q-.5 0-.865-.364-.364-.365-.364-.865t.364-.865q.365-.364.865-.364t.865.364q.364.365.364.865t-.364.865q-.365.364-.865.364ZM10.021 10Zm-.854 6.583h1.666l.25-2.166q.605-.167 1.167-.5.562-.334 1.021-.792l2.021.854.833-1.375-1.771-1.354q.104-.292.146-.604.042-.313.042-.646 0-.292-.042-.594t-.125-.635l1.771-1.375-.834-1.375-2.02.875q-.48-.479-1.032-.802-.552-.323-1.156-.49l-.271-2.187H9.167l-.271 2.187q-.604.167-1.156.49-.552.323-1.011.781l-2.021-.854-.833 1.375 1.75 1.354q-.083.333-.125.646-.042.312-.042.604t.042.594q.042.302.125.635l-1.75 1.375.833 1.375 2.021-.854q.459.458 1.011.781.552.323 1.156.49Z" />
	</svg>
);

export const SupportIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M9.958 15.021q.459 0 .771-.313.313-.312.313-.77 0-.459-.313-.771-.312-.313-.771-.313-.458 0-.77.313-.313.312-.313.771 0 .458.313.77.312.313.77.313Zm.104-8.563q.584 0 .948.313.365.312.365.791 0 .334-.229.709-.229.375-.646.729-.667.583-.969 1.073-.302.489-.302.969 0 .312.209.52.208.209.541.209.313 0 .552-.209.24-.208.302-.562.063-.333.282-.635.218-.303.718-.782.667-.625.907-1.114.239-.49.239-1.073 0-1.084-.791-1.75-.792-.667-2.084-.667-.875 0-1.531.344-.656.344-1.135 1.031-.167.229-.094.5.073.271.302.458.271.209.614.136.344-.073.573-.386.229-.291.532-.447.302-.157.697-.157ZM10 18.333q-1.708 0-3.229-.656-1.521-.656-2.656-1.781-1.136-1.125-1.792-2.646-.656-1.521-.656-3.25t.656-3.25q.656-1.521 1.792-2.646Q5.25 2.979 6.771 2.323 8.292 1.667 10 1.667q1.75 0 3.271.656t2.646 1.781q1.125 1.125 1.771 2.646.645 1.521.645 3.25t-.645 3.25q-.646 1.521-1.771 2.646t-2.646 1.781q-1.521.656-3.271.656ZM10 10Zm0 6.583q2.771 0 4.677-1.927 1.906-1.927 1.906-4.656 0-2.729-1.906-4.656Q12.771 3.417 10 3.417q-2.708 0-4.646 1.927Q3.417 7.271 3.417 10q0 2.729 1.937 4.656Q7.292 16.583 10 16.583Z" />
	</svg>
);

export const InvestmentIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M10 19.167q-2.333 0-4.25-1.063-1.917-1.062-3.167-2.833v1.354q0 .354-.26.615-.261.26-.615.26t-.614-.26q-.261-.261-.261-.615v-3.25q0-.354.261-.615.26-.26.614-.26h3.25q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26h-.937Q5 15.688 6.552 16.552q1.552.865 3.448.865 2.854 0 4.948-1.875 2.094-1.875 2.427-4.667.042-.354.302-.615.261-.26.615-.26t.614.26q.261.261.219.615-.167 1.75-.937 3.26-.771 1.511-2 2.636-1.23 1.125-2.813 1.76-1.583.636-3.375.636ZM1.708 10q-.354 0-.614-.26-.261-.261-.219-.615.167-1.75.937-3.26.771-1.511 2-2.636 1.23-1.125 2.813-1.76Q8.208.833 10 .833q2.333 0 4.25 1.063 1.917 1.062 3.167 2.833V3.375q0-.354.26-.615.261-.26.615-.26t.614.26q.261.261.261.615v3.25q0 .354-.261.615-.26.26-.614.26h-3.25q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h.937Q15 4.292 13.448 3.438 11.896 2.583 10 2.583q-2.875 0-4.969 1.875-2.093 1.875-2.406 4.667-.042.354-.302.615-.261.26-.615.26ZM10 15.812q-.312 0-.542-.218-.229-.219-.229-.532v-.354q-.771-.166-1.312-.593-.542-.427-.875-1.115-.167-.312-.042-.615.125-.302.458-.427.292-.104.573.021.281.125.448.417.292.479.698.729.406.25.948.25.729 0 1.167-.344.437-.343.437-.927 0-.562-.458-.927-.459-.365-1.833-.865-1.25-.458-1.813-1.072-.563-.615-.563-1.552 0-.876.605-1.553.604-.677 1.604-.906v-.291q0-.313.229-.532.229-.218.542-.218.312 0 .531.218.219.219.219.532v.291q.541.063 1.052.386.51.323.823.823.166.25.041.552-.125.302-.437.427-.25.104-.521.01t-.5-.365q-.229-.25-.521-.374-.291-.126-.687-.126-.667 0-1.042.292t-.375.834q0 .5.448.812.448.312 1.719.729 1.27.479 1.864 1.167.594.687.594 1.708 0 1.063-.625 1.74t-1.875.906v.292q0 .312-.219.541-.219.229-.531.229Z" />
	</svg>
);

export const LogoutIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor">
		<path d="M12.625 13.667q-.25-.25-.25-.615 0-.364.25-.614l1.563-1.563H8.396q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h5.729l-1.521-1.542q-.229-.25-.229-.604t.25-.604q.25-.25.615-.25.364 0 .614.25l3.021 3.021q.146.146.208.302.063.156.063.323t-.063.323q-.062.156-.208.302l-3.042 3.042q-.25.25-.593.25-.344 0-.615-.271ZM4.25 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V4.25q0-.729.51-1.24.511-.51 1.24-.51h4.854q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26H4.25v11.5h4.854q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26Z" />
	</svg>
);

const { sidebar } = shortcuts;
const sidebarShortcutsList = Object.values(sidebar).map((_) => _.shortcut);

const links = [
	{
		link: '/',
		activePath: '/app',
		description: 'Trang tổng quan cho tất cả các chi tiêu',
		name: 'Tổng quan',
		Icon: OverviewIcon,
		shortcutText: sidebar.overview.shortcut,
	},
	{
		link: '/incomes',
		activePath: '/app/incomes',
		description: 'Thêm thu nhập của bạn ở đây',
		name: 'Thu nhập',
		Icon: IncomeIcon,
		shortcutText: sidebar.incomes.shortcut,
	},
	{
		link: '/expenses',
		description: 'Tất cả các khoản chi tiêu, bao gồm trả góp',
		activePath: '/app/expenses',
		name: 'Chi tiêu',
		Icon: ExpensesIcon,
		shortcutText: sidebar.expenses.shortcut,
	},
	{
		link: '/investments',
		description: 'Thêm các khoản đầu tư tại đây',
		activePath: '/app/investments',
		name: 'Đầu tư',
		Icon: InvestmentIcon,
		shortcutText: sidebar.investments.shortcut,
	},
	{
		link: '/subscriptions',
		description: 'Theo dõi các lần gia hạn sắp tới của bạn cho các khoản trả góp.',
		activePath: '/app/subscriptions',
		name: 'Trả góp',
		Icon: SubscriptionsIcon,
		shortcutText: sidebar.subscriptions.shortcut,
	},
];

const preferencesLinks = [
	{ link: 'mailto:support@quanlychitieu.fun', activePath: '', name: 'Hỗ trợ', Icon: SupportIcon },
	{ link: '/settings', activePath: '/app/settings', name: 'Cài đặt', Icon: SettingsIcon },
];

export default function Sidebar({ user, className, overrideClassName, onHide, show, onToggle }) {
	const router = useRouter();

	useHotkeys(sidebarShortcutsList, (_, handler) => {
		const keys = handler.keys.join('');
		if (keys === sidebar.overview.shortcut) router.push('/');
		if (keys === sidebar.incomes.shortcut) router.push('/incomes');
		if (keys === sidebar.expenses.shortcut) router.push('/expenses');
		if (keys === sidebar.investments.shortcut) router.push('/investments');
		if (keys === sidebar.subscriptions.shortcut) router.push('/subscriptions');
	});

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error('Logout error occurred');
		}
		window.location.assign('/signin');
	}

	return (
		<nav
			className={`z-[1] flex min-h-full flex-col bg-zinc-900 pb-2 pl-3 pr-3 pt-2 ${
				overrideClassName && show ? '' : 'max-sm:hidden'
			} ${className} transition-all ${show ? 'w-[280px] ' + overrideClassName : 'w-[64px]'}`}
		>
			<aside className={`z-[10] mb-[10px] flex h-full w-[100%] flex-col justify-between ${show ? 'xs:w-[260px]' : ''}`}>
				<div>
					<div className="mt-1 flex items-center justify-between">
						<div onClick={onHide}>
							<Link
								href="/"
								className={`flex h-[40px] items-center rounded-lg p-3 pr-0 text-base tracking-wide text-gray-700 ${
									show ? '' : 'hidden'
								}`}
							>
								<h1
									className={`ml-[-10px] mt-[-3px] items-center text-xl font-black text-slate-100 hover:opacity-80 ${
										show ? 'flex' : 'hidden'
									}`}
								>
									<Logo theme="white" />
									<PlanBadge
										className="relative top-[-10px]"
										plan={user.plan_status}
										isPremiumPlanEnded={user.isPremiumPlanEnded}
									/>
								</h1>
							</Link>
						</div>
						<button
							onClick={onToggle}
							className={`relative ml-[4px] h-[40px] w-[40px] items-center rounded-lg p-2 text-sm text-gray-500 transition-all hover:bg-zinc-800 focus:outline-none focus:ring-gray-100 xs:inline-flex sm:inline-flex md:inline-flex ${
								!show ? 'left-[-3px]' : user.isPremiumPlan ? 'left-[-1px]' : 'left-[-1px]'
							}`}
						>
							{show ? (
								<XMarkIcon title="Close menu" className="h-6 w-6 text-white" />
							) : (
								<Bars3Icon title="Open menu" className="h-6 w-6 text-white" />
							)}
						</button>
					</div>
					<div className="mb-2 mt-2 flex w-full flex-col items-center border-t border-zinc-800"></div>
					{links.map((linkItem) => (
						<span key={linkItem.name} onClick={onHide}>
							<Tooltip.Root>
								<Tooltip.Trigger asChild>
									<Link
										title={linkItem.name}
										href={linkItem.link}
										className={`mt-2 flex h-[40px] items-center rounded-lg p-2 text-base tracking-wide text-white transition-all hover:bg-zinc-800 ${
											router.pathname === linkItem.activePath ? 'bg-zinc-800' : ''
										} ${show ? 'w-[100%]' : ' w-[40px] justify-center'}`}
									>
										<span className="flex items-center">
											<linkItem.Icon />
											<span className={`ml-2 ${show ? 'visible' : 'hidden'}`}>{linkItem.name}</span>
										</span>
									</Link>
								</Tooltip.Trigger>
								<Tooltip.Content hideWhenDetached side="right" className="TooltipContent">
									<TooltipText
										className={`ml-4 ${show ? 'xs:hidden' : 'xs:block'}`}
										text={`${linkItem.name}`}
										shortcut={linkItem.shortcutText}
									/>
								</Tooltip.Content>
							</Tooltip.Root>
						</span>
					))}
				</div>

				<div>
					{preferencesLinks.map((linkItem) => (
						<div key={linkItem.name} onClick={onHide}>
							<Link
								href={linkItem.link}
								className={`mt-2 flex h-[40px] items-center rounded-lg p-2 text-base tracking-wide text-white hover:bg-zinc-800 ${
									router.pathname === linkItem.activePath ? 'bg-zinc-800' : ''
								} ${show ? '' : 'justify-center'}`}
							>
								<span className="flex items-center">
									<linkItem.Icon />
									<span className={`ml-2 mt-0 ${show ? '' : 'hidden'}`}>{linkItem.name}</span>
								</span>
							</Link>
						</div>
					))}
					<button
						className={`mt-2 flex h-[40px] w-full items-center rounded-lg p-2 text-base tracking-wide text-white hover:bg-zinc-800 ${
							show ? '' : 'justify-center'
						}`}
						onClick={signOut}
						title={'Đăng xuất'}
					>
						<div className="flex items-center">
							<LogoutIcon />
							<span className={`ml-2 ${show ? 'visible' : 'hidden'}`}>Đăng xuất</span>
						</div>
					</button>
				</div>
			</aside>
			{show ? (
				<div className="z-9 fixed inset-0 transition-opacity" onClick={() => onToggle()}>
					<div tabIndex={0} className="absolute inset-0 bg-zinc-900 opacity-50"></div>
				</div>
			) : null}
		</nav>
	);
}
