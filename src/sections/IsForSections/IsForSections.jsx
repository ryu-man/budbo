import { BudboAppSection, BudboConnectSection, BudboTraxSection } from ".";

export function IsForSections() {
	return (
		<div className="is-for-sections flex flex-col gap-14 lg:gap-20 xl:gap-24 2xl:gap-32">
			<BudboAppSection />
			<BudboConnectSection />
			<BudboTraxSection />
		</div>
	);
}
