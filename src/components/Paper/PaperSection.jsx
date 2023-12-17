import { cn } from "@/utils"

export function PaperSection({ children, className = '' }) {

    return (
        <div className={cn("paper-section flex flex-col py-12 border-neutral-300", className)}>
            {children}
        </div>
    )
}
