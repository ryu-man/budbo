import { cn } from "@/utils";
import style from "./item.module.css";

export function ColorfullItem({ title, description = "", Icon }) {
	return (
		<div
			className={cn(
				"colorfull-item bg-white flex flex-col gap-4 py-8 px-6 rounded-2xl border border-current box-border",
				style.item
			)}
		>
			<div className="flex items-center gap-4">
				<span className="text-3xl">
					<Icon />
				</span>
				<span className="text-black text-xl font-bold">{title}</span>
			</div>
			{description && <p className={cn(style.description)}>{description}</p>}
		</div>
	);
}
