import Image from "next/image";
import BudboConnectImage from "@/assets/images/connect-bg.png";
import {
	DispensariesIcon,
	GrowersIcon,
	LoyaltyIcon,
	ManufacturersIcon,
	PivotIcon,
	ScaleIcon,
	UsersIcon,
} from "@/icons";
import { LabsIcon } from "@/icons/LabsIcon";

import background from "@/assets/images/for-connect-bg.png";
import { ColorFullContainer, ColorfullItem } from "../colorfullContainer";
import { IsForSection } from "../IsForSection";
import { IsForHeaderImageContainer } from "../IsForHeaderImageContainer";
import { IsForFooter } from "../IsForFooter";

export function BudboConnectSection() {
	return (
		<IsForSection className="budbo-connect text-tan-hide-400">
			<div>
				<div className="mb-6">
					<h2 className="text-current">Budbo Connect</h2>
					<h5 className="text-black">We help businesses sell more products.</h5>
				</div>

				<p>
					Industry and sales data laid out in a simple and elegant interface
					empowers cannabis buisnesses to sell more products with a minimal
					investment of time.
				</p>
			</div>

			<IsForHeaderImageContainer>
				<Image src={BudboConnectImage} alt="Budbo Connect" />
			</IsForHeaderImageContainer>

			<ColorFullContainer>
				<div className="z-10 flex flex-col relative gap-12 lg:gap-8 2xl:gap-8">
					<div className="flex flex-col gap-inherit 3xl:px-16">
						<div>
							<div className="flex flex-col gap-2 mb-6">
								<h6>BUDBO CONNECT</h6>
								<h3 className="text-black">We are software-as-a-service.</h3>
							</div>

							<p className="leading-6 text-lg">
								Key analytics provide the final solution for business owners,
								allowing them to know which strains to grow and exactly which
								products to stock in order to increase sales, retain customers,
								and grow revenue.
							</p>
						</div>

						<div className="">
							<h5 className="text-black mb-6">
								With Budbo’s industry analytics and actionable insights,
								cannabis business owners can easily:
							</h5>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<ColorfullItem title="Grow revenue" Icon={ScaleIcon} />

								<ColorfullItem title="Scale and pivot" Icon={PivotIcon} />

								<ColorfullItem title="Attract new customers" Icon={UsersIcon} />

								<ColorfullItem
									title="Attract new customers"
									Icon={LoyaltyIcon}
								/>
							</div>
						</div>
					</div>

					<IsForFooter bg={background}>
						<h2 className="text-center mb-8">
							<span>Budbo Connect</span> <br />
							<span className="text-black">is for</span>
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div className="bg-white flex justify-center items-center gap-4 py-4 px-6 rounded-xl">
								<span className="text-3xl">
									<DispensariesIcon />
								</span>
								<span className="text-black text-base">Dispensaries</span>
							</div>

							<div className="bg-white flex justify-center items-center gap-4 py-4 px-6 rounded-xl">
								<span className="text-3xl">
									<GrowersIcon />
								</span>
								<span className="text-black text-base">Growers</span>
							</div>

							<div className="bg-white flex justify-center items-center gap-4 py-4 px-6 rounded-xl">
								<span className="text-3xl">
									<LabsIcon />
								</span>
								<span className="text-black text-base">Labs</span>
							</div>

							<div className="bg-white flex justify-center items-center gap-4 py-4 px-6 rounded-xl">
								<span className="text-3xl">
									<ManufacturersIcon />
								</span>
								<span className="text-black text-base">Manufacturers</span>
							</div>
						</div>
					</IsForFooter>
				</div>
			</ColorFullContainer>
		</IsForSection>
	);
}
