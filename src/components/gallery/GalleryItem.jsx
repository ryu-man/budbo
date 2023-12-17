import Image from "next/image";
import style from './gallery_item.module.css'
import clsx from "clsx";


export function GalleryItem({ size = 'md', src, alt, className = '' }) {
    return <Image src={src} alt={alt} className={clsx(style.gallery_item, style[size], className)} />
}
