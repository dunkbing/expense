import Image from 'next/image';

import Table from '@components/Table';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { incomes as IncomeType } from '@prisma/client';

import { formatCurrency, formatDate, isItToday } from 'utils/formatter';

import { incomeCategory } from 'constants/index';

import NoDataTable from './NoDataTable';

const tdClassNames = 'relative p-4 pl-8 text-zinc-600 text-sm';
const thList = ['Nguồn', 'Giá trị', 'Ngày nhận ↓', 'Phân loại', 'Ghi chú', 'Hành động'];

const categoryFilterData = Object.keys(incomeCategory)
	.filter(Boolean)
	.map((key) => ({ name: incomeCategory[key]?.name, key }));

type Props = {
	onFilterChange;
	filterKey;
	isLoading;
	data: IncomeType[];
	onEdit;
	onDelete;
	user;
	onCategoryFilterChange;
	categories;
};

export default function IncomeTable({
	onFilterChange,
	filterKey,
	isLoading,
	data = [],
	onEdit,
	onDelete,
	user,
	onCategoryFilterChange,
	categories,
}: Props) {
	const { currency, locale, isPremiumPlan, isPremiumPlanEnded } = user;

	if (!isLoading && !data.length) {
		return (
			<NoDataTable filterKey={filterKey} isPremiumPlan={isPremiumPlan} onFilterChange={onFilterChange}>
				<div className="flex flex-col items-center justify-center ">
					<p className="mt-2 font-medium text-black sm:mt-10">Bạn chưa có khoản thu nhập nào.</p>
					<Image className="mt-2" src="/static/illustrations/rich.svg" width={300} height={300} alt="No income" />
				</div>
			</NoDataTable>
		);
	}

	return (
		<Table
			showFilter
			onFilterChange={onFilterChange}
			filterKey={filterKey}
			title="Thu nhập"
			thList={thList}
			isLoading={isLoading}
			isPremiumPlan={isPremiumPlan && !isPremiumPlanEnded}
			categories={categories}
			enableCategoryFilter
			onCategoryFilterChange={onCategoryFilterChange}
			categoryFilterData={categoryFilterData}
		>
			{data.map((datum) => {
				const isToday = isItToday(new Date(datum.date), new Date());
				return (
					<tr key={datum.id} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
						<td className={tdClassNames}>
							<div className="flex items-center">
								<a target="_blank" className="font-medium text-zinc-900" rel="noreferrer">
									{datum.name}
								</a>
							</div>
						</td>
						<td className={`${tdClassNames} font-semibold text-zinc-900`}>
							{formatCurrency(datum.price, currency, locale)}
						</td>
						<td className={tdClassNames}>{isToday ? 'Today' : formatDate(datum.date, locale)}</td>
						<td className={`${tdClassNames} capitalize`}>{incomeCategory[datum.category]}</td>
						<td className={`${tdClassNames}  break-words`}>{datum.notes}</td>
						<td className={`${tdClassNames}`}>
							<div className="flex w-14 items-center justify-between">
								<button onClick={() => onEdit(datum)} title="Edit">
									<PencilIcon className="mr-2 h-4 w-4 cursor-pointer text-slate-700 hover:text-slate-500" />
								</button>
								<button onClick={() => onDelete(datum.id)} title="Delete">
									<TrashIcon className="mr-2 h-4 w-4 cursor-pointer text-slate-700 hover:text-slate-500" />
								</button>
							</div>
						</td>
					</tr>
				);
			})}
		</Table>
	);
}
