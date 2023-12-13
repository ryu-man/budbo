import { ReactNode } from 'react'
import clsx from 'clsx'

type PaperLightHeaderProps = {
    children: ReactNode
}
export function PaperLightHeader({ children }: PaperLightHeaderProps) {
    return (
        <div className={clsx("mb-12")}>
            {children}
        </div>
    )
}
