import { cn } from "@/utils";

export function Dots({ length = 0, active = 0 }) {
	return (
		<div className="dots flex gap-1">
			{[...new Array(length)].slice(0, 8).map((d, i) => (
				<div
					key={i}
					className={cn(
						"w-3 h-3 bg-neutral-100 rounded-full transition-colors duration-200",
						active === i && "bg-neutral-300"
					)}
				></div>
			))}
		</div>
	);
}
