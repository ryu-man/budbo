import {
	ColorFullContainer,
	ColorfullItem,
	IphoneSimulator,
	PaperSection,
} from "@/components";
import clsx from "clsx";
import Image from "next/image";

import BudboAppImage from "@/assets/images/budbo-bg.png";
import SwiperMatch1Image from "@/assets/images/swiper-match1.png";

import BudboMatchGifImage from "@/assets/images/home/budbo-match.gif";
import BudboR4Phone2Image from "@/assets/images/r4-phone2.png";

import SwipeDiscoverImage from "@/assets/images/swiper-discover.png";

import BudboSwipeImage from "@/assets/images/home/budbo-swipe.gif";
import BudboR2Phone1Image from "@/assets/images/r2-phone1.png";

import {
	BlockchainIcon,
	DispensariesIcon,
	RewardsIcon,
	SlidersIcon,
	SwipeIcon,
	DeliveryIcon,
	CannabisUsersIcon,
	MedicineIcon,
	SearchCannabisIcon,
} from "@/icons";

import TokenMirrorImage from "@/assets/images/token-mirror.svg";

import Background from "@/assets/images/for-app-bg.png";
import { SlideToMatchImageSwitcher } from "./SlideToMatchImageSwitcher";

import { SwipeToDiscoverImageSwitcher } from "./SwipeToDiscoverImageSwitcher";

import { ImageContainer } from "@/components/container";

export function BudboAppSection() {
	return (
		<div className="text-violet-600 flex flex-col 2xl:gap-8">
			<div>
				<div className="mb-6">
					<h2 className="text-primary">Budbo App</h2>
					<h5 className="text-black">
						Personalized cannabis products just a tap away
					</h5>
				</div>

				<p>
					Our unique features educate and empower users to find the right
					cannabis products, fulfilling our tagline... Smoke Savvy.
				</p>
			</div>

			<ImageContainer>
				<Image src={BudboAppImage} alt="Budbo app placeholder" />
			</ImageContainer>

			<ColorFullContainer>
				<div className="relative z-10 flex flex-col 2xl:gap-10">
					<div className="flex flex-col">
						<div className="mb-6">
							<h6 className="text-primary">BUDBO APP</h6>
							<h2 className="text-black">
								We are the premier online marketplace.
							</h2>
						</div>

						<p className="leading-6">
							Shop 1000s of local dispensaries, browse the latest products, or
							use one of our discovery features to find the perfect product.
							It&apos;s cannabis made simple.
						</p>
					</div>

					<div className=" flex flex-col gap-8">
						<div className="flex flex-col items-center">
							<div className="flex flex-col items-center text-primary py-4">
								<span className="text-2xl">
									<SlidersIcon />
								</span>
								<h2>Slide to Match</h2>
							</div>

							<p className="text-center">
								Our patent-pending matching feature allows users to personalize
								their medicine, product, and experience. Think of Match as your
								personal budtender and cannabis concierge.
							</p>

							<SlideToMatchImageSwitcher />
						</div>

						<div className="flex flex-col items-center">
							<div className="flex flex-col gap-2 items-center text-primary mb-4">
								<span className="text-2xl">
									<SwipeIcon />
								</span>
								<h2>Swipe to Discover</h2>
							</div>

							<p className="leading-6 text-center">
								This is why we are dubbed the &quot;tinder of weed&quot;.
								Quickly swipe left or right through locally available products
								and compare prices and delivery times between dispensaries.
							</p>

							<SwipeToDiscoverImageSwitcher />
						</div>
					</div>

					<div>
						<h5 className="text-black sm:mt-8 mb-8">What&apos;s inside?</h5>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<ColorfullItem
								title="1000s of local dispensaries"
								Icon={DispensariesIcon}
							/>

							<ColorfullItem title="Token rewards" Icon={RewardsIcon} />

							<ColorfullItem
								title="Powered by blockchain"
								Icon={BlockchainIcon}
							/>

							<ColorfullItem
								title="Delivery and pick up options"
								Icon={DeliveryIcon}
							/>
						</div>
					</div>

					<div className="relative pt-20 px-5 pb-5 ]  rounded-[24px] translate-y-20">
						<div className="background absolute top-0 left-0 h-full w-full z-0 rounded-inherit flex items-center overflow-hidden">
							<div className="bg-current opacity-20 w-full h-full absolute" />

							<Image
								className="w-ful scale-[1.8]"
								src={Background}
								alt="Background"
							/>
						</div>

						<Image
							className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px]"
							src={TokenMirrorImage}
							alt="Token mirror"
						/>

						<div className="z-10 relative">
							<h2 className="text-center mb-8">
								<span>Budbo Trax</span> <br />
								<span className="text-black">is for</span>
							</h2>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="bg-white flex justify-center items-center gap-4 py-4 px-4 rounded-xl">
									<span className="text-3xl">
										<CannabisUsersIcon />
									</span>
									<span className="text-black text-base">Cannabis Users</span>
								</div>

								<div className="bg-white flex justify-center items-center gap-4 py-4 px-4 rounded-xl">
									<span className="text-3xl">
										<MedicineIcon />
									</span>
									<span className="text-black text-base">Medical patients</span>
								</div>

								<div className="bg-white flex justify-center items-center gap-4 py-4 px-4 rounded-xl col-span-2">
									<span className="text-3xl">
										<SearchCannabisIcon />
									</span>
									<span className="text-black text-base">
										Anyone interested in cannabis
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ColorFullContainer>
		</div>
	);
}
