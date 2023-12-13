"use client";

import { cn } from "@/utils";
import { useContext, useEffect, useRef, useState } from "react";
import { SwitchContext } from "./context";

export function SwitchItem({ children, id }) {
	const context = useContext(SwitchContext);

	const _id = useRef(id || crypto.randomUUID());

	const [selected, setSelected] = context.selectedState;

	const [isSelected, setIsSelected] = useState(_id.current === selected);

	console.log(_id.current);

	useEffect(() => {
		setIsSelected(_id.current === selected);
	}, [selected]);

	return (
		<button
			className={cn(
				"switch-item flex items-center px-2 text-xs",
				isSelected && "selected"
			)}
			onClick={onClickHandler}
		>
			<div className={cn("")}>{children}</div>
		</button>
	);

	function onClickHandler() {
		setSelected(_id.current);
	}
}
