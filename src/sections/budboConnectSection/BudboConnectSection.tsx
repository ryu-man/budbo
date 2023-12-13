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

import TokenMirrorImage from "@/assets/images/token-mirror.svg";
import Background from "@/assets/images/for-connect-bg.png";
import { ColorfullItem } from "@/components";

export function BudboConnectSection() {
	return (
		<div className="text-tan-hide-400 flex flex-col gap-0">
			<div className="mb-6">
				<h2 className="text-current">Budbo Connect</h2>
				<h5 className="text-black">We help businesses sell more products.</h5>
			</div>

			<p>
				Industry and sales data laid out in a simple and elegant interface
				empowers cannabis buisnesses to sell more products with a minimal
				investment of time.
			</p>

			<div className="my-8">
				<Image src={BudboConnectImage} alt="Budbo Connect" />
			</div>

			<div className="colorfull-container relative px-8 py-12 rounded-[48px] mb-12">
				<div className="absolute inset-0 z-0 bg-current opacity-10 rounded-inherit" />

				<div className="z-10 flex flex-col relative">
					<div className="flex flex-col gap-2 mb-6">
						<h6>BUDBO CONNECT</h6>
						<h2 className="text-black">We are software-as-a-service.</h2>
					</div>

					<p className="leading-6 text-lg">
						Key analytics provide the final solution for business owners,
						allowing them to know which strains to grow and exactly which
						products to stock in order to increase sales, retain customers, and
						grow revenue.
					</p>

					<div className="mb-12"></div>

					<h5 className="text-black mb-6">
						With Budbo’s industry analytics and actionable insights, cannabis
						business owners can easily:
					</h5>

					<div className="flex flex-col gap-8">
						<ColorfullItem title="Grow revenue" Icon={ScaleIcon} />

						<ColorfullItem title="Scale and pivot" Icon={PivotIcon} />

						<ColorfullItem title="Attract new customers" Icon={UsersIcon} />

						<ColorfullItem title="Attract new customers" Icon={LoyaltyIcon} />
					</div>

					<div className="relative pt-20 px-5 pb-5  rounded-[24px] translate-y-20">
						<div className="background absolute top-0 left-0 h-full z-0 rounded-inherit flex items-center overflow-hidden">
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
								<span>Budbo Connect</span> <br />
								<span className="text-black">is for</span>
							</h2>

							<div className="flex flex-col gap-6">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
