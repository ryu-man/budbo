import { ColorFullContainer, ColorfullItem } from "../colorfullContainer";
import Image from "next/image";

import BudboAppImage from "@/assets/images/budbo-bg.png";

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

import Background from "@/assets/images/for-app-bg.png";
import { SlideToMatchImageSwitcher } from "./SlideToMatchImageSwitcher";

import { SwipeToDiscoverImageSwitcher } from "./SwipeToDiscoverImageSwitcher";

import { IsForSection } from "../IsForSection";
import { IsForHeaderImageContainer } from "../IsForHeaderImageContainer";
import { IsForFooter } from "../IsForFooter";
import { IsForFooterItem } from "../IsForFooterItem";

export function BudboAppSection() {
	return (
		<IsForSection className="budbo-app text-violet-600">
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

			<IsForHeaderImageContainer>
				<Image src={BudboAppImage} alt="Budbo app placeholder" />
			</IsForHeaderImageContainer>

			<ColorFullContainer>
				<div className="relative z-10 flex flex-col gap-12 lg:gap-8 2xl:gap-16">
					<div className="flex flex-col gap-inherit 3xl:px-16">
						<div className="flex flex-col">
							<div className="mb-6">
								<h6 className="text-primary">BUDBO APP</h6>
								<h3 className="text-black">
									We are the premier online marketplace.
								</h3>
							</div>

							<p className="leading-6">
								Shop 1000s of local dispensaries, browse the latest products, or
								use one of our discovery features to find the perfect product.
								It&apos;s cannabis made simple.
							</p>
						</div>

						<div className=" flex flex-col gap-8 md:gap-12 lg:gap-20 3xl:px-16">
							<div className="flex flex-col items-center">
								<div className="flex flex-col items-center text-primary py-4">
									<span className="text-2xl">
										<SlidersIcon />
									</span>
									<h4>Slide to Match</h4>
								</div>

								<p className="text-center">
									Our patent-pending matching feature allows users to
									personalize their medicine, product, and experience. Think of
									Match as your personal budtender and cannabis concierge.
								</p>

								<SlideToMatchImageSwitcher />
							</div>

							<div className="flex flex-col items-center">
								<div className="flex flex-col gap-2 items-center text-primary mb-4">
									<span className="text-2xl">
										<SwipeIcon />
									</span>
									<h4>Swipe to Discover</h4>
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

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
					</div>

					<IsForFooter bg={Background}>
						<h2 className="text-center mb-8">
							<span>Budbo App</span> <br />
							<span className="text-black">is for</span>
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<IsForFooterItem text="Cannabis Users" Icon={CannabisUsersIcon} />

							<IsForFooterItem text="Medical patients" Icon={MedicineIcon} />

							<IsForFooterItem
								className="lg:col-span-2"
								text="Anyone interested in cannabis"
								Icon={SearchCannabisIcon}
							/>
						</div>
					</IsForFooter>
				</div>
			</ColorFullContainer>
		</IsForSection>
	);
}
