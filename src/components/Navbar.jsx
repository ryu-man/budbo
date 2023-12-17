import Image from "next/image";
import logo from "@/assets/images/logos/budbo-logo.svg";
import logoWithText from "@/assets/images/logos/budbo-logo-with-text.svg";
import PerfectMatchIcon from "@/assets/images/icon-perfect-match.svg";
import UserIcon from "@/assets/images/icons/icon-user.svg";
import HeartIcon from "@/assets/images/icons/icon-heart.svg";
import CartIcon from "@/assets/images/icons/icon-cart.svg";

import {
	HumburgerIcon,
	SearchIcon,
	WalletConnectIcon,
	ExchangeIcon,
	OwlFaceIcon,
} from "@/icons";
import { Input, Toggle } from "@/components";
import Link from "next/link";

export default function Navbar({ onMenuButtonClick = undefined }) {
	return (
		<nav className="h-[100px] md:h-[144px] bg-white box-border border-b fixed top-0 left-0 right-0 z-50">
			<div className="flex flex-col">
				<div className="hidden h-11 justify-between items-center text-xs py-2  px-4 md:flex border-b font-bold text-rum-700">
					<button className="uppercase hover:underline border px-2 py-1 rounded-md">
						+ add your location
					</button>

					<div className="contents lg:flex gap-8">
						<div className="flex items-center gap-2">
							<span>Convert Prices to</span>
							
							<span className="text-lg inline-flex">
								<OwlFaceIcon />
							</span>

							<Toggle />
						</div>

						<div className="flex items-center gap-1">
							<div className="flex items-center gap-2">
								<span className="inline-flex">
									<ExchangeIcon />
								</span>
								<span className="text-primary">1 BUDBO</span>
							</div>

							<span> =</span>
							<span className="text-black">0.15 USDT</span>
						</div>

						<button className="flex items-center gap-2 hover:underline">
							<span>Connect Crypto Wallet</span>
							<span className="inline-flex">
								<WalletConnectIcon />
							</span>
						</button>
					</div>
				</div>

				<div className="flex items-center justify-between gap-5 py-4  px-4">
					<div className="flex items-center text-primary h-fit gap-6">
						<Link href="/">
							<Image className="lg:hidden" src={logo} alt="Budbo logo" />
							<Image
								className="hidden mr-6 lg:block"
								src={logoWithText}
								alt="Budbo logo"
							/>
						</Link>

						<button className="flex items-center justify-center gap-2 bg-primary bg-opacity-10 w-12 h-12 rounded-full text-sm sm:w-fit sm:rounded-lg sm:px-6">
							<Image src={PerfectMatchIcon} alt="Find perfect match" />
							<div className="font-bold hidden whitespace-nowrap sm:block">
								Find perfect match
							</div>
						</button>

						<div className="w-[280px] hidden lg:flex">
							<Input
								className="w-full"
								placeholder="Products, retailers & more..."
								Pre={SearchIcon}
							/>
						</div>
					</div>

					<div className="flex items-center gap-5">
						<div className="flex items-center gap-2">
							<button className="bg-primary bg-opacity-5 w-12 h-12 flex items-center justify-center rounded-full">
								<Image src={UserIcon} alt="User icon" />
							</button>

							<span className="hidden text-rum-700 xl:inline">Login</span>
						</div>

						<button className="bg-primary bg-opacity-5 w-12 h-12  items-center justify-center rounded-full hidden sm:flex">
							<Image src={HeartIcon} alt="Heart icon" />
						</button>

						<div className="flex items-center gap-2">
							<button className="bg-primary  w-12 h-12 flex items-center justify-center rounded-full">
								<Image src={CartIcon} alt="Cart icon" />
							</button>

							<span className="hidden text-rum-700 whitespace-nowrap lg:inline">
								0.00 USD
							</span>
						</div>

						<button
							className=" w-fit h-12 flex items-center justify-center rounded-full xl:hidden"
							onClick={onMenuButtonClick}
						>
							<HumburgerIcon />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
