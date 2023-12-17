import { cn } from "@/utils";

export function IsForFooterItem({ Icon, text = "", className = "" }) {
	return (
		<div
			className={cn(
				"is-for-footer-item bg-white flex justify-center items-center gap-4 py-4 px-6 rounded-xl",
				className
			)}
		>
			{Icon && (
				<span className="text-3xl">
					<Icon />
				</span>
			)}
			<span className="text-black text-base">{text}</span>
		</div>
	);
}
