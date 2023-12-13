import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

type PaperProps = {
    title: string
    image: StaticImageData
    className?: string
}


export function PaperHeader({ title, image, className="" }: PaperProps) {
    return (
        <div className={clsx("paper-title", className)}>
            <span className="text-current font-bold text-xl">{title}:</span>

                <Image className="h-full w-auto" src={image} alt="Budbo app" />
        </div>
    )
}
