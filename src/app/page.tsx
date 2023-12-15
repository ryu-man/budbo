import Image from "next/image";
import {
	CTA,
	Container,
	Footer,
	Gallery,
	GalleryItem,
	IphoneSimulator,
	Navbar,
	Paper,
	PaperHeader,
	PaperLightHeader,
	PaperSection,
} from "@/components";
import { Articles, NavbarWithDrawer, Roadmap } from "@/views";
import {
	BudboAppSection,
	BudboConnectSection,
	BudboTraxSection,
	JoinBudboSection,
} from "@/sections";

import BuildingAppImage from "@/assets/images/reason1-logo.png";
import GreenLabelImage from "@/assets/images/reason1-img-square.png";
import ReasonOneImage from "@/assets/images/reason1-img.png";

import ConnectHeaderImage from "@/assets/images/reason1-logo2.png";
import ConnectBackgroundImage from "@/assets/images/reason1-img2.jpg";

import TraxHeaderImage from "@/assets/images/reason1-logo3.png";
import TraxBackgroundImage from "@/assets/images/reason1-img3.png";

import BudboSwipeImage from "@/assets/images/home/budbo-swipe.gif";
import BudboR2Phone1Image from "@/assets/images/r2-phone1.png";

import BudboMatchGifImage from "@/assets/images/home/budbo-match.gif";
import BudboR4Phone2Image from "@/assets/images/r4-phone2.png";

import BudboR2Phone3Image from "@/assets/images/r2-phone3.png";
import BudboR4Phone1Image from "@/assets/images/r4-phone1.png";
import BudboR4Phone3Image from "@/assets/images/r4-phone3.png";

import TokenDashboardImage from "@/assets/images/tokendash.jpg";
import WorldMapImage from "@/assets/images/world-map.png";

import Gallery1Image from "@/assets/images/gallery/1.jpg";
import Gallery2Image from "@/assets/images/gallery/2.jpg";
import Gallery3Image from "@/assets/images/gallery/3.jpg";
import Gallery4Image from "@/assets/images/gallery/4.jpg";
import Gallery5Image from "@/assets/images/gallery/5.jpg";
import Gallery6Image from "@/assets/images/gallery/6.jpg";
import Gallery7Image from "@/assets/images/gallery/7.jpg";
import Gallery8Image from "@/assets/images/gallery/8.jpg";
import Gallery9Image from "@/assets/images/gallery/9.jpg";
import Gallery10Image from "@/assets/images/gallery/10.jpg";

import Technologies1Image from "@/assets/images/technology-img.png";
import TechnologiesMobImage from "@/assets/images/technology-img-mob.png";

import UniqueImage from "@/assets/images/unique-img.jpg";

import CannabisImage from "@/assets/images/cannabis-image2x.jpg";

import LocationMapSm from "@/assets/images/location-map-mob.svg";
import LocationMap from "@/assets/images/location-map.jpg";

import BudboLogo from "@/assets/images/budbo-logo.svg";
import PolygonLogo from "@/assets/images/polygon-logo.svg";
import UniswapLogo from "@/assets/images/uniswap-logo.svg";

import { Team, TeamMemeber } from "@/sections/team";

import { members } from "@/data";
import { ImageContainer } from "@/components/container";
import { Sidebar } from "@/views/sidebar/Sidebar";
import { SidebarContainer } from "@/views/sidebar";
import { IsForSections } from "@/sections/IsForSections";

export default function Home() {
	return (
		<div className="budbo-app flex flex-col">
			<NavbarWithDrawer />

			<div className="pt-[100px] md:pt-[144px]">
				<JoinBudboSection />
			</div>

			<div className="flex flex-col gap-10 md:pl-5">
				<div className="relative">
					<Paper>
						<div className="flex flex-col">
							<div className="mb-4 flex flex-col gap-4">
								<h2>
									Nothing in the world can take the place of
									<span className="text-primary"> persistence.</span>
								</h2>

								<h6>
									...persistence and determination alone are omnipotent. We are
									Budbo.
								</h6>
							</div>

							<p className="text-black">
								Without further delay and with great honor, we introduce the
								Budbo ecosystem:
							</p>

							<PaperSection className="border-b">
								<PaperHeader
									className="text-primary"
									title="Budbo App"
									image={BuildingAppImage}
								>
									<p>
										Our flagship product where users can shop 1000s of local
										dispensaries, order cannabis, and earn cryptocurrency
										rewards.
									</p>
								</PaperHeader>

								<div className="relative">
									<Image
										className="w-full"
										src={ReasonOneImage}
										alt="Green label"
									/>

									<div
										className="absolute top-1/2 left-1/2"
										style={{ transform: "translate(-50%, -50%)" }}
									>
										<Image src={GreenLabelImage} alt="Green label" />
									</div>
								</div>
							</PaperSection>

							<PaperSection className="border-b">
								<PaperHeader
									className="text-orange-400"
									title="Budbo Connect"
									image={ConnectHeaderImage}
								>
									<p>
										SaaS for grass! Business intelligence tools for dispensaries
										and brands, providing effortless e-commerce management,
										proactive decision making, and increased profitability.
									</p>
								</PaperHeader>

								<Image
									src={ConnectBackgroundImage}
									alt="Connect background image"
								/>
							</PaperSection>

							<PaperSection className="border-b">
								<PaperHeader
									className="text-cyan-400"
									title="Budbo Trax"
									image={TraxHeaderImage}
								>
									<p>
										A powerful logistics solution built to monitor the cannabis
										supply chain including continuity of product, chain of
										custody, and fleet management for businesses.
									</p>
								</PaperHeader>

								<Image
									className="w-full"
									src={TraxBackgroundImage}
									alt="Trax background image"
								/>
							</PaperSection>

							<PaperSection className="border-b">
								<div className="mb-12">
									<h6 className="text-rum-700">
										A &quot;product first&quot; approach
									</h6>
									<h3>
										<span className="text-primary">
											It was all just a pipe dream...
										</span>
										right up until we did it.
									</h3>
								</div>

								<p>
									&quot;Tinder&quot; for buying weed - we did that! Quickly
									swipe through 1000&apos;s of locally available strains and
									products to find that perfect &quot;match&quot;.
								</p>

								<div className="self-center mt-12 w-full">
									<IphoneSimulator
										screen={BudboSwipeImage}
										placeholder={BudboR2Phone1Image}
										before={BudboR2Phone1Image}
										after={BudboR2Phone3Image}
										height="565px"
									/>
								</div>
							</PaperSection>

							<PaperSection className="border-b">
								<div className="mb-12">
									<h6 className="text-rum-700">
										United States Patent # 17/826,580
									</h6>
									<h3>
										<span className="text-primary">Budbo,</span> heal thyself.
									</h3>
								</div>

								<p>
									Personalize your medicine and experience. Our patent pending
									<span className="text-primary"> product matching</span>{" "}
									feature revolutionizes how people find the right cannabis
									products.
									<br /> <br />
									We&apos;ve just put
									<span className="text-primary">
										{" "}
										the world&apos;s best budtender{" "}
									</span>
									in the palm of your hand.
								</p>

								<div className="self-center mt-12 w-full">
									<IphoneSimulator
										screen={BudboMatchGifImage}
										placeholder={BudboR4Phone2Image}
										before={BudboR4Phone1Image}
										after={BudboR4Phone3Image}
										height="565px"
									/>
								</div>
							</PaperSection>

							<PaperSection className="border-b">
								<div className="mb-12">
									<h6 className="text-rum-700">One token to rule them all</h6>
									<h3>
										<span className="text-primary">Supercharge</span> your
										portfolio.
									</h3>
								</div>

								<p>
									Nothing is more important to Budbo than our community of
									users. It is our north star, guiding everything we do.
									<br /> <br />
									By joining Budbo, users immedialtely begin earning
									<span className="text-primary"> Budbo Token(BUBO)</span>{" "}
									rewards. Equipped with a token dashboard, users can track
									their rewards and learn about cryptocurrency and blockchain.
								</p>

								<div className="mb-10"></div>

								<Image src={TokenDashboardImage} alt="Token dashboard image" />
							</PaperSection>

							<PaperSection>
								<PaperLightHeader>
									<h6 className="text-rum-700">Revolutionaries wanted</h6>
									<h3>
										<span className="text-primary">True grit.</span> That&apos;s
										Budbo.
									</h3>
								</PaperLightHeader>

								<p>
									&quot;It is not the critic who counts; not the man who points
									out how the strong man stumbles, or where the doer of deeds
									could have done them better. The credit belongs to the man who
									is actually in the arena, whose face is marred by dust and
									sweat and blood.&quot;
									<br /> <br />
									You are in control of your future. Begin your adventure, jump
									into the arena with Budbo.
								</p>

								<Image src={WorldMapImage} alt="Token dashboard image" />
							</PaperSection>

							<div className="pb-28">
								<CTA
									title="Opportunity is knocking"
									description="Don't miss out on the golden age of cannabis and blockchain."
									action="Joining Budbo is free"
									href="/register"
								/>
							</div>

							<div>
								<div className="mb-6">
									<h6 className="text-rum-700">
										Together, we pioneer the future
									</h6>
									<h3>
										Problem Solvers.
										<span className="text-primary">Industry Evolvers.</span>
									</h3>
								</div>

								<p>
									You&apos;ve landed on this site for a reason and with purpose.
									Welcome,
									<span className="text-primary">
										we&apos;ve been expecting you.
									</span>
								</p>

								<div className="mb-12"></div>

								<Gallery>
									<GalleryItem
										size="lg"
										src={Gallery1Image}
										alt="Gallery item"
									/>
									<GalleryItem
										size="lg"
										src={Gallery2Image}
										alt="Gallery item"
									/>
									<GalleryItem src={Gallery3Image} alt="Gallery item" />
									<GalleryItem src={Gallery4Image} alt="Gallery item" />
									<GalleryItem src={Gallery5Image} alt="Gallery item" />
									<GalleryItem src={Gallery6Image} alt="Gallery item" />
									<GalleryItem src={Gallery7Image} alt="Gallery item" />
									<GalleryItem src={Gallery8Image} alt="Gallery item" />
									<GalleryItem
										size="lg"
										src={Gallery9Image}
										alt="Gallery item"
									/>
									<GalleryItem
										size="lg"
										src={Gallery10Image}
										alt="Gallery item"
									/>
								</Gallery>
							</div>
						</div>

						<div></div>
					</Paper>

					<SidebarContainer>
						<Sidebar />
					</SidebarContainer>
				</div>

				<div className="paper-grid">
					<div className="col-span-3 w-full">
						<h3 className="mb-8">
							We&apos;re causing
							<span className="text-primary"> quite the buzz...</span>
						</h3>
						<Articles />
					</div>
				</div>

				<div className="relative">
					<Paper>
						<IsForSections></IsForSections>
					</Paper>
					<div className="mb-14"></div>

					<Paper transparent>
						<h2 className="mb-12">Blockchain and Budbo </h2>

						<div className="flex flex-col gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
							<div className="flex flex-col gap-8">
								<div>
									<div className="mb-6">
										<Image
											className="h-10 w-fit"
											src={BudboLogo}
											alt="Budbo logo"
										/>
									</div>

									<div className="font-bold text-xl">
										<span className="text-primary">
											Budbo&apos;s token rewards ecosystem
										</span>{" "}
										was built for app users, dispensaries, growers, and brands
										to earn tokens simply by using Budbo.
									</div>
								</div>

								<div className=" rounded-[24px] overflow-hidden">
									<Image src={TokenDashboardImage} alt="Token dashboard" />
								</div>

								<p>
									Budbo&apos;s one-of-kind token dashboard allows users to keep
									track of rewards and stay up-to-date with all things Budbo and
									Budbo Token.
								</p>
							</div>

							<div className="flex flex-col gap-8">
								<div>
									<div className="mb-6">
										<Image
											className="h-10 w-fit"
											src={PolygonLogo}
											alt="Polygon logo"
										/>
									</div>

									<div className="font-bold text-xl">
										<span className="text-primary">
											Our partners at Polygon(Symbol: MATIC)
										</span>{" "}
										help ensure the fastest transaction times.
									</div>
								</div>

								<div className="bg-white px-12 py-6 md:py-10 lg:py12 xl:py-14 2xl:py-16 my-6 rounded-[48px] flex justify-center">
									<Image
										src={Technologies1Image}
										alt="Budbo technologies"
									></Image>
								</div>

								<p>
									To keep costs in check and transactions at near-instant
									speeds, Budbo utilizes the Polygon scaling solution. Our
									partners at Polygon(Symbol: MATIC) are the very best in their
									assistance with the development of these protocols.
								</p>
							</div>

							<div className="flex flex-col gap-8">
								<div>
									<div className="mb-6">
										<Image
											className="h-10 w-fit"
											src={UniswapLogo}
											alt="Uniswap logo"
										/>
									</div>

									<div className="font-bold text-xl">
										Another key component of the Budbo ecosystem is the use of
										<span className="text-primary">
											{" "}
											swap and pool protocols.
										</span>
									</div>
								</div>

								<div className="bg-white px-12 py-6 md:py-10 lg:py12 xl:py-14 2xl:py-16 my-6 rounded-[48px] flex justify-center">
									<Image src={TechnologiesMobImage} alt="Budbo technologies" />
								</div>

								<p>
									For many people, the technological barrier to entry into
									blockchain is still too high.
									<br /> <br />
									Budbo solves this problem and{" "}
									<span className="font-bold text-black">
										allows end-users and cannabis businesses to enjoy the
										benefits of blockchain
									</span>{" "}
									and tokens without having to be tech-savvy.
								</p>
								<div className="mt-8">
									<CTA
										title="Fortune favors the bold."
										description="Success begins with a single step. Let's grow your future together."
										action="Revolutionaries wanted"
										href="/register"
									/>
								</div>
							</div>
						</div>
					</Paper>

					<Paper>
						<Image className="mb-12" src={UniqueImage} alt="Unique image" />

						<h3 className="mb-6">
							<span className="text-primary">Your future.</span> Your money.{" "}
							<br />
							Your adventure.
							<span className="text-primary">You&apos;re Budbo.</span>
						</h3>

						<p>
							With
							<span className="text-primary">
								{" "}
								263 million cannabis consumers worldwide,
							</span>{" "}
							Budbo&apos;s community has tremendous potential for growth. <br />
							<br />
							Global sales of legal cannabis totaled
							<span className="text-primary"> $43.72 billion in 2022</span>, and
							are projected to be around $57.18 billion for 2023. Continuing
							into the future legal cannabis sales are projected at
							<span className="text-primary"> $444.34 billion by 2030</span>,
							growing at a <span className="text-primary">CAGR of 34.03%.</span>{" "}
							<br />
							<br />
							Budbo is set to be a critical role in this explosive growth as
							increased legalization of cannabis continues to gain traction all
							over the world.
						</p>

						<ImageContainer>
							<Image src={CannabisImage} alt="" />
						</ImageContainer>
					</Paper>
					<Paper transparent>
						<div className="flex flex-col items-center lg:items-start gap-4">
							<div className="px-6 py-6">
								<p className="mb-2">
									Budbo is proud to be a global brand with locations and token
									holders
									<span className="text-primary"> all over the world.</span>
								</p>
							</div>

							<div>
								<Image
									className="w-full sm:hidden"
									src={LocationMapSm}
									alt="Location map"
								/>
							</div>

							<Image
								className="w-full hidden sm:block"
								src={LocationMap}
								alt="Location map"
								
							/>

							<div className="px-3">
								<CTA
									title="As the industry grows, your future can surely blossom with it."
									description="Grow a future in cannabis and blockchain with Budbo."
									action="Seize the day: Join Budbo for free"
									href="/register"
								/>
							</div>
						</div>
					</Paper>
					<Paper>
						<div className="mb-20">
							<h6 className="text-rum-700">The future looks bright</h6>
							<h3>
								What&apos;s next for
								<span className="text-primary">you and Budbo</span>
							</h3>
						</div>

						<Roadmap />

						<div className="mt-36"></div>

						<div className="mb-12">
							<h6 className="text-rum-700">
								Driven, by passion and experience.
							</h6>
							<h3>
								Meet <span className="text-primary">your new team</span>
							</h3>
						</div>

						<p>
							Our dedicated team comes from Google, Comcast, NetSpend, Harvard
							trained doctors, cannabis industry veterans, and seasoned
							financial executives.
						</p>

						<div className="mt-12"></div>

						<Team>
							{members.map((member) => (
								<TeamMemeber key={member.name} member={member} />
							))}
						</Team>
					</Paper>
					<SidebarContainer>
						<Sidebar />
					</SidebarContainer>
				</div>
			</div>

			<div className="md:pl-5">
				<Footer />
			</div>
		</div>
	);
}
