"use client";

import React from 'react';
import Image from 'next/image';
import { CustomBtn } from '.';
import { motion } from 'framer-motion'

const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Find , Book , of rent a car — quickly and easily!</h1>
                <p className='hero__subtitle'>Streamline your car rental exprience with our effortless booking process</p>
                <CustomBtn
                    title='Explore Cars'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </motion.div>

            <div className='hero__image-container'>
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileInView={{ scale: 1.05 }}
                    className='hero__image'>
                    <Image src={'/hero.png'} alt='hero' fill className='object-contain' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='hero__image-overlay' />
            </div>

        </div>
    )
}

export default Hero;