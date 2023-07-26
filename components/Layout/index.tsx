import { useCallback, useState } from 'react';

import MenuIcon from '@components/Menu/MenuIcon';
import Sidebar from '@components/Menu/Sidebar';
import { User } from '@supabase/supabase-js';
import { Analytics } from '@vercel/analytics/react';

type Props = { className?: string; children?: React.ReactNode; user: User };

export default function Layout({ className, children, user }: Props) {
	const [state, setState] = useState({ show: false, overrideClassName: '' });

	const onToggle = useCallback(
		(isOutsideMenu: boolean) => {
			setState({ show: !state.show, overrideClassName: isOutsideMenu && !state.show ? 'max-sm:flex' : '' });
		},
		[state]
	);

	const onHide = useCallback(() => setState({ ...state, show: false }), [state]);

	return (
		<main className={`relative flex min-h-full w-full bg-zinc-50 ${className}`}>
			<Sidebar
				user={user}
				show={state.show}
				overrideClassName={state.overrideClassName}
				onHide={onHide}
				onToggle={() => onToggle(true)}
				className="fixed bottom-0 left-0 top-0"
			/>
			<div className="ml-[64px] h-full w-full p-4 max-sm:ml-0">
				<MenuIcon onShow={() => onToggle(true)} />
				{children}
			</div>
			<Analytics />
		</main>
	);
}
