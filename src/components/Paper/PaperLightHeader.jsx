import { cn } from '@/utils'

export function PaperLightHeader({ children }) {
    return (
        <div className={cn("mb-12")}>
            {children}
        </div>
    )
}
