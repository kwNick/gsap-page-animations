'use client';
import { animatePageOut } from '@/utils/animations';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

const TransitionLink = ({ href, label }: { href: string; label: string }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router);
        }
    }
    return (
        <button className='mx-1.5 hover:text-[#9932CC]' onClick={handleClick}>
            {label}
        </button>
    )
}

export default TransitionLink