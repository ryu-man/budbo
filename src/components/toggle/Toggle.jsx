"use client";

import { cn } from "@/utils";
import { useState } from "react";

export function Toggle({ checked = false }) {
	const [_checked, setChecked] = useState(checked);

	return (
		<button
			className={cn(
				"toggle inline-flex items-center h-6 w-11  rounded-full p-1 transition-colors duration-100",
				_checked ? "bg-primary" : "bg-rum-200"
			)}
			onClick={onClick}
		>
			<input type="checkbox hidden" hidden={true} />

			<div className="relative w-full h-full">
				<div
					className="absolute left-0 bg-white w-4 h-4 rounded-full transition-all duration-100"
					style={{
						left: `${+_checked * 100}%`,
						transform: `translateX(${-_checked * 100}%)`,
					}}
				/>
			</div>
		</button>
	);

	function onClick() {
		setChecked(!_checked);
	}
}
