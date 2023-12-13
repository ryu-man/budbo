import Image from "next/image";
import Link from "next/link";
import BudboLogoWithText from "@/assets/images/logos/budbo-logo-with-text.svg";
import { ArrowRightIcon } from "@/icons";
import { Button } from "@/components";
import style from "./footer.modules.css";
import { cn } from "@/utils";

export function Footer() {
	return (
		<footer className="pt-16 pb-[80px] px-1 mt-24 bg-white rounded-tl-[48px]">
			<div
				className={cn(
					"footer-inner flex flex-col items-center gap-6",
					style.footer_inner
				)}
			>
				<Image className="h-[124px] w-[auto]" src={BudboLogoWithText} alt="Budbo logo with text" />
				<p className="text-rum-700">Together, we pioneer the future!</p>

				<Link className="" href="/register">
					<Button className="px-16 bg-gossamer-500">
						<span>Your future awaits. Join Budbo now</span>
						<span className="text-[9px]">
							<ArrowRightIcon />
						</span>
					</Button>
				</Link>
			</div>
		</footer>
	);
}
