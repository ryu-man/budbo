import { cn } from "@/utils";
import style from "./container.module.css";

export function ColorFullContainer({ children }) {
	return (
		<div
			className={cn(
				"colorfull-container relative py-12 rounded-[48px] mb-12 px-8 md:px-12 lg:px-10 xl:px-20 xl:pt-24 2xl:px-16 2xl:pt-36",
				style.container
			)}
		>
			<div className="absolute inset-0 z-0 bg-current opacity-10 rounded-inherit" />

			{children}
		</div>
	);
}
