import style from "./container.module.css";
import { cn } from "@/utils";

export function Container({ children, className = "" }) {
	return (
		<div className={cn("container", style.container, className)}>
			{children}
		</div>
	);
}
