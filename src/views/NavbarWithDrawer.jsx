"use client"

import { Navbar } from "@/components";
import { LoginDrawer } from "./drawer/LoginDrawer";
import { useState } from "react";

export function NavbarWithDrawer() {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<Navbar
				onMenuButtonClick={() => {
					setOpenDrawer(!openDrawer);
				}}
			/>
			{openDrawer && <LoginDrawer />}
		</>
	);
}
