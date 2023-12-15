"use client";

import SwipeDiscoverImage from "@/assets/images/swiper-discover.png";

import BudboSwipeGifImage from "@/assets/images/home/budbo-swipe.gif";

import BudboR2Phone1Image from "@/assets/images/r2-phone1.png";

import { ImageSwitcher } from "./ImageSwitcher";

export function SwipeToDiscoverImageSwitcher() {
	return (
		<ImageSwitcher
			desktop={SwipeDiscoverImage}
			mobile={BudboSwipeGifImage}
			placeholder={BudboR2Phone1Image}
		/>
	);
}
