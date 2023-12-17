import { ReactNode } from "react";
import { cn } from "@/utils";
import "./paper.css";
import { PaperContainer } from "./PaperContainer";

type PaperProps = {
	children?: ReactNode;
	transparent?: boolean;
};

export function Paper({ children, transparent = false }: PaperProps) {
	return (
		<div className="paper-grid-container">
			<div className={cn("paper", transparent && "transparent")}>
				<div className="paper-grid budbo-container">
					<PaperContainer>{children}</PaperContainer>
				</div>
			</div>
		</div>
	);
}
