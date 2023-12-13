import clsx from 'clsx'
import style from './article.module.css'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

type ArticleProps = {
    src: string | StaticImageData
}
export function Article({ src }: ArticleProps) {
    return (
        <div className={clsx("article h-24", style.article)}>
            <Image src={src} alt="article source" />
        </div>
    )
}
