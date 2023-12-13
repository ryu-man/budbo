import { cn } from "@/utils";
import style from "./roadmap.module.css";

export function Item({ title, events = [] }) {
	return (
		<li className="flex flex-col gap-3 z-10">
			<div className={cn("flex items-center", style.roadmap_item_title)}>
				<span className="w-[13px] h-[13px] bg-primary rounded-full"></span>
				<h3
					className={cn(
						"text-3xl text-primary font-bold",
						style.roadmap_event_title
					)}
				>
					{title}
				</h3>
			</div>

			<div className="flex flex-col gap-2">
				{events.map((name) => (
					<div
						key={name}
						className={cn("flex items-baseline", style.roadmap_event)}
					>
						<div className="flex justify-center min-w-[13px]">
							<div className="min-w-[8px] min-h-[8px] bg-neutral-200 rounded-full"></div>
						</div>

						<p className={style.roadmap_event_desc}>{name}</p>
					</div>
				))}
			</div>
		</li>
	);
}
