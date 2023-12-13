import Image from "next/image";
import {
	BIIcon,
	ComplianceIcon,
	DispensariesIcon,
	FlexibilityIcon,
	GrowersIcon,
	ManufacturersIcon,
	POFIcon,
	SafetyIcon,
	SecurityIcon,
} from "@/icons";
import { LabsIcon } from "@/icons/LabsIcon";
import { ColorfullItem } from "@/components";
import BudboTraxImage from "@/assets/images/trax-bg.jpg";

import TokenMirrorImage from "@/assets/images/token-mirror.svg";
import Background from "@/assets/images/for-trax-bg.png";

export function BudboTraxSection() {
	return (
		<div className="text-malibu-400 flex flex-col gap-6">
			<div>
				<h2 className="text-current">Budbo Trax</h2>
				<h5 className="text-black">
					The cannabis supply chain from seed to soul
				</h5>
			</div>

			<p>
				Providing visibility into the continuity of plants and products,
				BudboTrax also offers fleet management tools for the tracking of
				precious cargo.
			</p>

			<div className="my-4">
				<Image src={BudboTraxImage} alt="Budbo Trax" />
			</div>

			<div className="colorfull-container relative px-8 py-8 rounded-[48px] mb-12">
				<div className="absolute inset-0 z-0 bg-current opacity-10 rounded-inherit" />

				<div className="z-10 flex flex-col relative gap-0">
					<div className="flex flex-col gap-2 mb-6">
						<h6>BUDBO TRAX</h6>
						<h2 className="text-black">We are peace of mind.</h2>
					</div>

					<p>
						Dispensaries, growers, labs and other vested parties will have full
						control and insight into all of their cannabis movements via the
						Budbo Connect Dashboard. Track single large scale shipments, or
						multiple drivers out for local deliveries.
					</p>

					<div className="mb-12"></div>

					<h5 className="text-black mb-6">What&apos;s inside?</h5>

					<div className="flex flex-col gap-8">
						<ColorfullItem
							title="Security"
							description="Real-time GPS tracking of high value cannabis products on all
								shipments."
							Icon={SecurityIcon}
						/>

						<ColorfullItem
							title="Compliance"
							description="Shipment documents scanned and stored in the cloud."
							Icon={ComplianceIcon}
						/>

						<ColorfullItem
							title="Flexibility"
							description="Adjustable geofences and automated alerts."
							Icon={FlexibilityIcon}
						/>
						<ColorfullItem
							title="Safety"
							description="Driver “SOS” button to immediately report emergencies to authorities."
							Icon={SafetyIcon}
						/>

						<ColorfullItem
							title="Business Intelligence"
							description="Real-time verifiable pickup and delivery confirmations."
							Icon={BIIcon}
						/>

						<ColorfullItem
							title="Peace of mind"
							description="Confidence of knowing where your product is at all times."
							Icon={POFIcon}
						/>
					</div>

					<div className="relative pt-20 px-5 pb-5 ]  rounded-[24px] translate-y-20">
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
								<span>Budbo Trax</span> <br />
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
