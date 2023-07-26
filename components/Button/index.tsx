import Loader from '@components/Loader';

type Props = {
	type?: 'submit' | 'reset' | 'button' | undefined;
	loading?: boolean;
	text: string;
	disabled?: boolean;
};

export default function Button({ loading, text, type = 'button', disabled }: Props) {
	return (
		<button
			type={type}
			disabled={loading || disabled}
			className="mt-0 flex h-[44px] items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-white hover:bg-zinc-700"
		>
			{loading ? <Loader /> : text}
		</button>
	);
}
