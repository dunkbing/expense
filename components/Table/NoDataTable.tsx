import TableHeaderActions from './TableHeaderActions';

type Props = {
	title?: string;
	filterKey: string;
	children?: React.ReactNode;
	isPremiumPlan?: boolean;
	categories?: string[];
	onFilterChange?: (value: string) => void;
	categoryFilterData?: Array<{ name: string; key: string }>;
	onCategoryFilterChange?: (value: string[]) => void;
};

export default function NoDataTable({
	title,
	filterKey,
	children,
	isPremiumPlan,
	categories = [],
	onFilterChange,
	categoryFilterData,
	onCategoryFilterChange,
}: Props) {
	return (
		<>
			<TableHeaderActions
				title={title}
				isPremiumPlan={isPremiumPlan}
				isLoading={false}
				showFilter={true}
				enableCategoryFilter
				onFilterChange={onFilterChange}
				onCategoryFilterChange={onCategoryFilterChange}
				categoryFilterData={categoryFilterData}
				filterKey={filterKey}
				categories={categories}
			/>
			{children}
		</>
	);
}
