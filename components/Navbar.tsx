"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { CustomBtn } from '.'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>

                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo.svg'
                        alt='Logo'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                </Link>

                <CustomBtn
                    title="Sign in"
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                    type='button'
                    handleClick={() => router.push('/login')}
                />

            </nav>
        </header>
    )
}

export default Navbar
