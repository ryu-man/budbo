"use client";

import SwiperMatch1Image from "@/assets/images/swiper-match1.png";

import BudboMatchGifImage from "@/assets/images/home/budbo-match.gif";
import BudboR4Phone2Image from "@/assets/images/r4-phone2.png";
import { ImageSwitcher } from "./ImageSwitcher";

import BudboR2Phone1Image from "@/assets/images/r2-phone1.png";
import BudboR2Phone3Image from "@/assets/images/r2-phone3.png";


export function SlideToMatchImageSwitcher() {
	return (
		<ImageSwitcher
			desktop={SwiperMatch1Image}
			mobile={BudboMatchGifImage}
			placeholder={BudboR4Phone2Image}
			before={BudboR2Phone1Image}
			after={BudboR2Phone3Image}
		/>
	);
}
