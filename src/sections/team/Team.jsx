import { cn } from "@/utils";
import "./team.css";

export function Team({ children }) {
	return <div className={cn("team gap-6 px-0")}>{children}</div>;
}
