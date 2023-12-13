import Image from "next/image";
import logo from "@/assets/images/logos/budbo-logo.svg";
import PerfectMatchIcon from "@/assets/images/icon-perfect-match.svg";
import UserIcon from "@/assets/images/icons/icon-user.svg";
import HeartIcon from "@/assets/images/icons/icon-heart.svg";
import CartIcon from "@/assets/images/icons/icon-cart.svg";

import { HumburgerIcon } from "@/icons";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="h-[100px] flex items-center justify-between bg-white p-4 box-border border-b fixed top-0 left-0 right-0 z-50">
			<div className="flex items-center text-primary h-fit gap-6">
				<Link href="/register">
					<Image src={logo} alt="Budbo logo" />
				</Link>

				<button className="flex items-center justify-center gap-2 bg-primary bg-opacity-10 w-12 h-12 rounded-full text-sm">
					<Image src={PerfectMatchIcon} alt="Find perfect match" />
					<div className="font-bold hidden">Find perfect match</div>
				</button>
			</div>

			<div className="flex gap-5">
				<button className="bg-primary bg-opacity-5 w-12 h-12 flex items-center justify-center rounded-full">
					<Image src={UserIcon} alt="User icon" />
				</button>

				<button className="bg-primary bg-opacity-5 w-12 h-12  items-center justify-center rounded-full hidden">
					<Image src={HeartIcon} alt="Heart icon" />
				</button>

				<button className="bg-primary  w-12 h-12 flex items-center justify-center rounded-full">
					<Image src={CartIcon} alt="Cart icon" />
				</button>

				<button className=" w-fit h-12 flex items-center justify-center rounded-full">
					<HumburgerIcon />
				</button>
			</div>
		</nav>
	);
}
