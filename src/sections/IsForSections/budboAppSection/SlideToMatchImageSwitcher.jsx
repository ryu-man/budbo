"use client";

import SwiperMatch1Image from "@/assets/images/swiper-match1.png";

import BudboMatchGifImage from "@/assets/images/home/budbo-match.gif";
import BudboR4Phone2Image from "@/assets/images/r4-phone2.png";
import { ImageSwitcher } from "./ImageSwitcher";

export function SlideToMatchImageSwitcher() {
	return (
		<ImageSwitcher
			desktop={SwiperMatch1Image}
			mobile={BudboMatchGifImage}
			placeholder={BudboR4Phone2Image}
		/>
	);
}
