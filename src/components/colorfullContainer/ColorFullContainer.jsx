import { cn } from "@/utils";
import style from "./container.module.css";

export function ColorFullContainer({ children }) {
	return (
		<div
			className={cn(
				"colorfull-container relative px-8 py-8 rounded-[48px] mb-12 2xl:px-20 2xl:pt-40",
				style.container
			)}
		>
			<div className="absolute inset-0 z-0 bg-current opacity-10 rounded-inherit" />

			{children}
		</div>
	);
}
