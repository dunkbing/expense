import { dateFormatStr } from '@constants/index';
import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';
import { format } from 'date-fns';

import ExportButton, { ExportButtonDummy } from './ExportButton';
import TableFilter from './TableFilter';

type Props = {
	isPremiumPlan?: boolean;
	enableCategoryFilter?: boolean;
	categoryFilterData: Array<{ name: string; key: string }>;
	filterKey: string;
	title: string;
	isLoading?: boolean;
	showFilter?: boolean;
	onFilterChange?: (value: string) => void;
	onCategoryFilterChange?: (value: string[]) => void;
	categories: string[];
};

export default function TableHeaderActions({
	isPremiumPlan,
	enableCategoryFilter = false,
	categoryFilterData = [],
	filterKey,
	title,
	isLoading,
	showFilter,
	onFilterChange,
	onCategoryFilterChange,
	categories = [],
}: Props) {
	return (
		<div className="mb-12 flex h-[34px] w-full flex-col xs:mb-4 xs:flex-row xs:items-center xs:justify-between">
			<h3 className="text-black">Dữ liệu</h3>
			{!isLoading ? (
				<div className="mt-2 flex justify-end xs:mt-0">
					{showFilter ? <TableFilter filterKey={filterKey} onFilterChange={onFilterChange} /> : null}
					{enableCategoryFilter ? (
						<MultiSelectBox
							placeholder="Loại thu nhập"
							className="mr-4 max-w-[140px] font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
							onValueChange={onCategoryFilterChange}
							value={categories}
						>
							{categoryFilterData.map(({ name, key }) => (
								<MultiSelectBoxItem key={key} value={key} text={name} />
							))}
						</MultiSelectBox>
					) : null}
					{isPremiumPlan ? (
						<ExportButton filename={`${title}-${format(new Date(), dateFormatStr)}.csv`} />
					) : !isLoading ? (
						<ExportButtonDummy />
					) : null}
				</div>
			) : null}
		</div>
	);
}
