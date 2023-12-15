import { cn } from "@/utils";

export function IsForSection({ children, className }) {
	return <div className={cn("is-for-section flex flex-col md:gap-16 2xl:gap-8", className)}>{children}</div>;
}
