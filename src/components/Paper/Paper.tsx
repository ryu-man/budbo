import { ReactNode } from "react";
import { cn } from "@/utils";
import "./paper.css";

type PaperProps = {
	children?: ReactNode;
};

export function Paper({ children }: PaperProps) {
	return <div className={cn("paper")}>{children}</div>;
}
