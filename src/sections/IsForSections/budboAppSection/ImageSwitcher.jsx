"use client";

import { IphoneSimulator } from "@/components";
import { Switch } from "@/components/switch/Switch";
import { SwitchItem } from "@/components/switch/SwitchItem";

import Image from "next/image";
import { useState } from "react";

export function ImageSwitcher({ desktop, mobile, placeholder }) {
	const [view, setView] = useState("mobile");

	function onChange(value) {
		setView(value);
		console.log(value);
	}
	return (
		<div className="image-switch flex flex-col items-center gap-4 w-full">
			<div className="flex justify-center py-8">
				<Switch value="mobile" onChange={onChange}>
					<SwitchItem id="desktop">DESKTOP</SwitchItem>

					<SwitchItem id="mobile">MOBILE</SwitchItem>
				</Switch>
			</div>

			{view === "desktop" && (
				<Image className="w-full" src={desktop} alt="Desktop view" />
			)}

			{view === "mobile" && (
				<div className="w-fit self-center">
					<IphoneSimulator
						screen={mobile}
						placeholder={placeholder}
						height="565px"
					/>
				</div>
			)}
		</div>
	);
}
