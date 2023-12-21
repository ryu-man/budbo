import Image from "next/image";
import style from "./style.module.css";
import { cn } from "@/utils";

export function IphoneSimulator({
	screen,
	placeholder,
	width = "auto",
	height = "auto",
	before = undefined,
	after = undefined,
}) {
	return (
		<div
			className={cn("iphone-simulator gap-4", style.iphone_simulator)}
			style={{ width, height }}
		>
			{before && (
				<div className="flex-1 max-w-[250px] hidden w-full md:block shrink">
					<Image className="h-auto" src={before} alt="" />
				</div>
			)}

			<div className="relative flex h-full shrink-0 mx-auto">
				<div className={cn("screen", style.screen)}>
					<Image
						src={screen}
						alt="iPhone screen image"
						style={{ width: "auto", height: "100%" }}
					/>
				</div>

				{placeholder && (
					<div className={cn("placeholder", style.placeholder)}>
						<Image
							className="w-full h-full"
							src={placeholder}
							alt="iPhone placeholder image"
						/>
					</div>
				)}

				<div className={cn("notch", style.notch)}></div>
			</div>

			{after && (
				<div className="flex-1 max-w-[250px] hidden w-full md:block shrink">
					<Image className="w-full h-full" src={after} alt="" />
				</div>
			)}
		</div>
	);
}
