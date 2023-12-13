import clsx from "clsx"
import { ReactNode } from "react"
import style from './gallery.module.css'

type GalleryProps = {
    children?: ReactNode
}

export function Gallery({ children }: GalleryProps) {
    return (
        <div className={clsx("gallery", style.gallery)}>
            {children}
        </div>
    )
}
