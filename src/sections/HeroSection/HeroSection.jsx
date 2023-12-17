"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { ArrowRightIcon } from "@/icons/ArrowRightIcon";
import mainAnimation from "./main-animation.json";
import "./hero.css";

export function HeroSection() {
	const backgroundCointainerRef = useRef(null);

	useEffect(() => {
		if (!backgroundCointainerRef.current) {
			return;
		}

		Lottie.loadAnimation({
			container: backgroundCointainerRef.current,
			animationData: mainAnimation,
		});
		return () => {
			Lottie.destroy();
		};
	}, []);

	return (
		<div className="hero flex flex-col  items-start relative">

			<div className="flex flex-col w-fit pt-16 pr-8 pl-8 md:pl-6 xl:pl-20 3xl:pl-48">
				<div className="flex flex-col w-full">
					<h1 className="mb-12">
						<span>Move. Maker.</span> <br />
						<span className="text-primary">Boundary breaker.</span>
					</h1>

					<p className="text-gray-500 leading-7 max-w-[600px]">
						Tinder for weed? The Amazon of cannabis? Bitcoin for medicinal-use?!
						Everything you&apos;ve heard about us is probably true.
						<br />
						<br />
						Budbo is the avant-garde of cannabis technology. Battle tested and
						forged in fire, we are the last of the 47 Rōnin.
					</p>

					<div className="mt-16">
						<button className="flex items-baseline gap-2 bg-primary text-white py-7 px-8 rounded-lg text-xl font-bold w-full md:w-fit md:px-20 whitespace-nowrap hover:bg-electric-violet-700">
							<span>Joining Budbo is free </span>
							<span className="text-[9px]">
								<ArrowRightIcon />
							</span>
						</button>
					</div>
				</div>
			</div>

			<div
				className="background absolute bottom-0 right-0 z-0"
				style={{ zIndex: "-1" }}
				ref={backgroundCointainerRef}
			/>
		</div>
	);
}
