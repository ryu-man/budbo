import clsx from "clsx"
import { ReactNode } from "react"

type PaperSectionProps = {
    className?: string
    children?: ReactNode
}
export function PaperSection({ children, className = '' }: PaperSectionProps) {

    return (
        <div className={clsx("paper-section flex flex-col py-12 border-neutral-300", className)}>
            {children}
        </div>
    )
}
