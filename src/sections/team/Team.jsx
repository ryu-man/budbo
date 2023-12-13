import { cn } from "@/utils";
import style from "./team.module.css";

export function Team({ children }) {
	return (
		<div className={cn("team gap-6 px-0", style.team)}>{children}</div>
	);
}
