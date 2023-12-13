import { ReactNode } from 'react'
import style from './style.module.css'
import clsx from 'clsx'

type H2WithDescriptionProps = {
    children?: ReactNode
}

export function H2WithDescription({ children }: H2WithDescriptionProps) {
    return (
        <div className={clsx("mb-12", style.h2_with_description)}>
            {children}
        </div>
    )
}
