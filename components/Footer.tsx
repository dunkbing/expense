type Props = {
	className?: string;
};

const Footer = ({ className }: Props) => {
	return (
		<footer className={`flex h-14 w-full items-center border-t pl-6 pr-6 font-medium ${className}`}>
			<div className="mb-[8px] flex w-full justify-center xs:mb-0">
				<div className="flex flex-row items-center justify-between gap-6 border-t border-white/5">
					<p className="text-xs text-gray-600">&copy; Copyright {new Date().getFullYear()}, Quanlychitieu.fun</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
