"use client";

import SwipeDiscoverImage from "@/assets/images/swiper-discover.png";

import BudboSwipeGifImage from "@/assets/images/home/budbo-swipe.gif";

import BudboR2Phone1Image from "@/assets/images/r2-phone1.png";

import BudboR4Phone1Image from "@/assets/images/r4-phone1.png";
import BudboR4Phone3Image from "@/assets/images/r4-phone3.png";

import { ImageSwitcher } from "./ImageSwitcher";

export function SwipeToDiscoverImageSwitcher() {
	return (
		<ImageSwitcher
			desktop={SwipeDiscoverImage}
			mobile={BudboSwipeGifImage}
			placeholder={BudboR2Phone1Image}
			before={BudboR4Phone1Image}
			after={BudboR4Phone3Image}
		/>
	);
}
