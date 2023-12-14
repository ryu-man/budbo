"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { cn } from "@/utils";
import { ArrowRightIcon } from "@/icons/ArrowRightIcon";
import style from "./style.module.css";
import mainAnimation from "./main-animation.json";
import { Container } from "@/components";

export function JoinBudboSection() {
	const backgroundCointainerRef = useRef<HTMLDivElement | null>(null);

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
		<div
			className={cn(
				"section join-budbo-section flex items-center justify-center relative",
				style.join_budbo_section
			)}
		>
			<Container className="flex flex-col h-full">
				<div className="h-14"></div>

				<h1 className="mb-12">
					<span>Move. Maker.</span> <br />
					<span className="text-primary">Boundary breaker.</span>
				</h1>

				<p className="text-gray-500 leading-7">
					Tinder for weed? The Amazon of cannabis? Bitcoin for medicinal-use?!
					Everything you&apos;ve heard about us is probably true.
					<br />
					<br />
					Budbo is the avant-garde of cannabis technology. Battle tested and
					forged in fire, we are the last of the 47 Rōnin.
				</p>

				<div className="mb-12"></div>

				<button className="flex items-baseline gap-2 bg-primary text-white py-6 px-20 rounded-lg text-xl font-bold w-fit">
					<span>Joining Budbo is free </span>
					<span className="text-[9px]">
						<ArrowRightIcon />
					</span>
				</button>

				<div
					className="background absolute bottom-0 right-0 z-0"
					style={{ zIndex: "-1" }}
					ref={backgroundCointainerRef}
				/>
			</Container>
		</div>
	);
}
