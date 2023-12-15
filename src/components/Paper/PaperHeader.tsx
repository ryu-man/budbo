import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { cn } from "@/utils";

type PaperProps = {
	title: string;
	image: StaticImageData;
	className?: string;
};

export function PaperHeader({
	title,
	image,
	className = "",
	children,
}: PaperProps) {
	return (
		<div
			className={cn(
				"paper-title flex flex-col xl:flex-row items-start xl:items-center gap-4",
				className
			)}
		>
			<div
				className={cn(
					"background flex items-center gap-8 min-w-fit"
				)}
			>
				<div className="text-current font-bold text-xl whitespace-nowrap flex-1">
					{title}:
				</div>

				<Image className="h-full w-auto" src={image} alt="Budbo app" />
			</div>
			<div>{children}</div>
		</div>
	);
}
