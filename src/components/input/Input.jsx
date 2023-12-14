import { cn } from "@/utils";

export function Input({ className = "", Pre = undefined, Post = undefined }) {
	return (
		<div
			className={cn(
				"input relative  flex-nowrap border border-neutral-400 rounded-md overflow-hidden h-12 text-black",
				className
			)}
		>
			{Pre && (
				<span className="absolute w-12 h-12 inline-flex justify-center items-center text-2xl text-neutral-400 pointer-events-none">
					<Pre />
				</span>
			)}

			<input
				className={cn("border-none", Pre && "pl-12", Post && "pr-12")}
				type="text"
				placeholder="Products, retailers & more..."
			/>

			{Post && (
				<span className="absolute w-12 h-12 inline-flex justify-center items-center text-2xl text-neutral-400 pointer-events-none">
					<Post />
				</span>
			)}
		</div>
	);
}
