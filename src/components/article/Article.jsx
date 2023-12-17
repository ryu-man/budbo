import clsx from 'clsx'
import style from './article.module.css'
import Image from 'next/image'

export function Article({ src }) {
    return (
        <div className={clsx("article h-24", style.article)}>
            <Image src={src} alt="article source" />
        </div>
    )
}
