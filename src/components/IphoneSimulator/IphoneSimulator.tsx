import Image, { StaticImageData } from "next/image"
import style from './style.module.css'
import clsx from "clsx"

type IphoneSimulatorProps = {
    width?: string
    height?: string
    screen: StaticImageData | string
    placeholder: StaticImageData | string
}

export function IphoneSimulator({ screen, placeholder, width = "auto", height = "auto" }: IphoneSimulatorProps) {
    return (
        <div className={clsx("iphone-simulator", style.iphone_simulator)} style={{ width, height }}>
            <div className={clsx("screen", style.screen)}>
                <Image src={screen} alt="iPhone screen image" style={{ width: 'auto', height: '100%' }} />
            </div>

            {placeholder && (
                <div className={clsx("placeholder", style.placeholder)}>
                    <Image className="w-full h-full" src={placeholder} alt="iPhone placeholder image" />
                </div>
            )}

            <div className={clsx("notch", style.notch)}></div>
        </div>
    )
}
