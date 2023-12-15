import { cn } from "@/utils";

export function Input({
	className = "",
	placeholder = "",
	Pre = undefined,
	Post = undefined,
}) {
	return (
		<div
			className={cn(
				"input relative  flex-nowrap border border-neutral-200 rounded-md overflow-hidden h-12 text-black bg-white",
				className
			)}
		>
			{Pre && (
				<span className="absolute w-12 h-12 inline-flex justify-center items-center text-2xl text-neutral-400 pointer-events-none">
					<Pre />
				</span>
			)}

			<input
				className={cn(
					"bg-transparent bg-none border-none w-full h-full outline-none",
					Pre && "pl-12",
					Post && "pr-12"
				)}
				type="text"
				placeholder={placeholder}
			/>

			{Post && (
				<span className="absolute w-12 h-12 inline-flex justify-center items-center text-2xl text-neutral-400 pointer-events-none">
					<Post />
				</span>
			)}
		</div>
	);
}
