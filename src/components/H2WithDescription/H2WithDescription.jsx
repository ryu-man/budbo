import style from './style.module.css'
import clsx from 'clsx'

export function H2WithDescription({ children }) {
    return (
        <div className={clsx("mb-12", style.h2_with_description)}>
            {children}
        </div>
    )
}
