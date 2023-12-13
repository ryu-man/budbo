import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import { ArrowRightIcon } from '@/icons'

import OwlImage from '@/assets/images/owl.svg'
import NotificationMobileImage from '@/assets/images/notification-bg.png'
import { cn } from '@/utils'

export function CTAJoin() {
    return (
        <div className={cn("cta-join relative", style.cta_join)}>
            <Image className='absolute inset-0 h-full' src={NotificationMobileImage} alt="Notification background" style={{ zIndex: '0' }} />

            <div className="inner overflow-hidden flex flex-col gap-8 py-12 px-5 relative">

                <h2>Opportunity is knocking</h2>

                <p>Don&apos;t miss out on the golden age of cannabis and blockchain.</p>

                <Link className="flex items-baseline justify-center gap-2 bg-primary text-white py-4 px-1 rounded-lg text-base font-bold w-full" href="/register">
                    <span>Joining Budbo is free </span>
                    <span className="text-[9px]">
                        <ArrowRightIcon />
                    </span>
                </Link>

            </div>

            <Image className='absolute top-full right-0 -translate-y-20 translate-x-5' src={OwlImage} alt="owl" />
        </div>
    )
}
