import { cn } from "@/utils";
import style from "./roadmap.module.css";
import { Item } from "./Item";

export function Roadmap() {
	return (
		<ul className={cn("roadmap flex flex-col gap-10 relative", style.roadmap)}>
			<div className="absolute top-0 bottom-0 border-l-2 border-rum-200 z-0 translate-x-[5.5px]" />

			<Item title="2023" events={["Community building and expansion"]} />

			<Item
				title="Early 2024"
				events={[
					"Worldwide Budbo app release",
					"US and Canada Budbo Connect/dispensary onboarding",
				]}
			/>

			<Item
				title="2024"
				events={[
					"Israel, Germany, Luxembourg Budbo Connect and dispensary onboarding",
					"Budbo Trax release",
				]}
			/>

			<Item title="2025" events={["On-going worldwide expansion..."]} />
		</ul>
	);
}
