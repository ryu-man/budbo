import { cn } from "@/utils";
import style from "./container.module.css";

export function ColorFullContainer({ children }) {
	return (
		<div className={cn("colorfull-container", style.container)}>{children}</div>
	);
}
