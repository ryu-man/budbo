import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons";

import OwlImage from "@/assets/images/owl.svg";
import NotificationMobileImage from "@/assets/images/notification-bg.png";
import { cn } from "@/utils";
import { Button } from ".";

export function CTA({ title, description, href, action }) {
	return (
		<div className={cn("cta relative")}>
			<Image
				className="absolute inset-0 h-full rounded-3xl"
				src={NotificationMobileImage}
				alt="Notification background"
				style={{ zIndex: "0" }}
			/>

			<div className="inner overflow-hidden flex flex-col gap-8 py-12 px-7 relative">
				<h2>{title}</h2>

				<p>{description}</p>

				<Link className="text-base font-bold w-full" href={href}>
					<Button className="w-full">
						<span>{action}</span>
						<span className="text-[9px]">
							<ArrowRightIcon />
						</span>
					</Button>
				</Link>
			</div>

			<Image
				className="absolute top-full right-0 -translate-y-[72px] translate-x-5"
				src={OwlImage}
				alt="owl"
			/>
		</div>
	);
}
