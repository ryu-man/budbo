import Image from "next/image";
import {
	BIIcon,
	CarriersIcon,
	ComplianceIcon,
	DeliveryIcon,
	DispensariesIcon,
	FlexibilityIcon,
	GrowersIcon,
	ManufacturersIcon,
	POFIcon,
	SafetyIcon,
	SecurityIcon,
	SteerIcon,
} from "@/icons";
import { LabsIcon } from "@/icons/LabsIcon";
import { ColorFullContainer, ColorfullItem } from "../colorfullContainer";
import BudboTraxImage from "@/assets/images/trax-bg.jpg";

import background from "@/assets/images/for-trax-bg.png";
import { IsForSection } from "../IsForSection";
import { IsForHeaderImageContainer } from "../IsForHeaderImageContainer";
import { IsForFooter } from "../IsForFooter";
import { IsForFooterItem } from "../IsForFooterItem";

export function BudboTraxSection() {
	return (
		<IsForSection className="budbo-trax text-malibu-400">
			<div>
				<div className="mb-6">
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
			</div>

			<IsForHeaderImageContainer>
				<Image src={BudboTraxImage} alt="Budbo Trax" />
			</IsForHeaderImageContainer>

			<ColorFullContainer>
				<div className="z-10 flex flex-col relative gap-12 lg:gap-8 2xl:gap-16">
					<div className="flex flex-col gap-inherit 3xl:px-16">
						<div>
							<div className="flex flex-col gap-2 mb-6">
								<h6>BUDBO TRAX</h6>
								<h3 className="text-black">We are peace of mind.</h3>
							</div>

							<p>
								Dispensaries, growers, labs and other vested parties will have
								full control and insight into all of their cannabis movements
								via the Budbo Connect Dashboard. Track single large scale
								shipments, or multiple drivers out for local deliveries.
							</p>
						</div>

						<div className="">
							<h5 className="text-black mb-6">What&apos;s inside?</h5>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<ColorfullItem
									title="Security"
									description="Real-time GPS tracking of high value cannabis products on all shipments."
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
						</div>
					</div>

					<IsForFooter bg={background}>
						<h2 className="text-center mb-8">
							<span>Budbo Trax</span> <br />
							<span className="text-black">is for</span>
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

							<IsForFooterItem text="Dispensaries" Icon={DispensariesIcon} />

							<IsForFooterItem text="Growers" Icon={GrowersIcon} />

							<IsForFooterItem text="Labs" Icon={LabsIcon} />

							<IsForFooterItem text="Manufacturers" Icon={ManufacturersIcon} />

							<IsForFooterItem text="Drivers" Icon={SteerIcon} />

							<IsForFooterItem text="Shipers" Icon={DeliveryIcon} />

							<IsForFooterItem className="lg:col-span-2" text="Carriers" Icon={CarriersIcon} />
						</div>
					</IsForFooter>
				</div>
			</ColorFullContainer>
		</IsForSection>
	);
}
