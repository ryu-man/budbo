import Image, { StaticImageData } from "next/image";
import style from './gallery_item.module.css'
import clsx from "clsx";

type GalleryItemProps = {
    src: string | StaticImageData
    alt: string
    className?: string
    size?: 'md' | 'lg'
}
export function GalleryItem({ size = 'md', src, alt, className = '' }: GalleryItemProps) {
    return <Image src={src} alt={alt} className={clsx(style.gallery_item, style[size], className)} />
}
