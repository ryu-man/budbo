import clsx from "clsx"
import style from './gallery.module.css'

export function Gallery({ children }) {
    return (
        <div className={clsx("gallery", style.gallery)}>
            {children}
        </div>
    )
}
