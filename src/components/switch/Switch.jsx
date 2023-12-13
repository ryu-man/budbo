"use client";

import { useContext, useEffect, useState } from "react";
import { cn } from "@/utils";
import { SwitchContext } from "./context";
import "./switch.css";

export function Switch({ children = undefined, value = undefined }) {
	const [selected, setSelected] = useState(value);

	return (
		<div
			className={cn(
				"switch p-1 flex bg-white min-h-[36px] rounded-lg w-fit border-current border"
			)}
		>
			<SwitchContext.Provider
				value={{ selectedState: [selected, setSelected] }}
			>
				{children}
			</SwitchContext.Provider>
		</div>
	);
}
