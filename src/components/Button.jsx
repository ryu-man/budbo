import { cn } from "@/utils";

export function Button({ children, className = "" }) {
	return (
		<button
			className={cn(
				"flex items-baseline justify-center gap-2 bg-primary text-white py-4 px-8 rounded-lg text-base font-bold w-fit transition-colors duration-100 hover:bg-gossamer-600 hover:underline",
				className
			)}
		>
			{children}
		</button>
	);
}
