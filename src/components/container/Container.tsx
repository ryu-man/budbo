import clsx from 'clsx'
import style from './container.module.css'

export function Container({ children }) {

    return (
        <div className={clsx("container", style.container)}>
            {children}
        </div>
    )
}
