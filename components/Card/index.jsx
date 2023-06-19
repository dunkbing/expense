export default function Card({ title = '', data = '', className = '', icon: Icon = null, hint, children }) {
	return (
		<div className={`rounded-lg bg-white p-4 text-left shadow shadow-gray-200 ${className}`}>
			{Icon ? Icon : null}
			{children ? (
				children
			) : (
				<div className="flex flex-col">
					<h3 className="text-xs font-semibold uppercase text-zinc-500">{title}</h3>
					<p className="mt-1 text-2xl font-extrabold text-zinc-900">{data}</p>
					{hint ? <p className="mt-2 text-xs text-gray-500">{hint}</p> : null}
				</div>
			)}
		</div>
	);
}
