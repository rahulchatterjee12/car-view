"use client"

import React, { useState } from 'react'
import { CarProps } from '@/types';
import Image from 'next/image';
import { CarDetails, CustomBtn } from '.';
import { calculateCarRent } from '@/utils';
import getCarImages from '@/helper/getCarImages';


interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
    const {
        city_mpg,
        drive,
        make,
        model,
        transmission,
        year } = car;
    const [open, setOpen] = useState(false);
    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>$</span>
                {carRent}
                <span className='self-start text-[14px] font-semibold'>/day</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={getCarImages(car)} alt={model} fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel' />
                        <p className='text-14px'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/tire.svg" width={20} height={20} alt='steering wheel' />
                        <p className='text-14px'>{drive.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/gas.svg" width={20} height={20} alt='steering wheel' />
                        <p className='text-14px'>{city_mpg} MPG</p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <CustomBtn
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setOpen(true)}
                    />
                </div>
            </div>

            <CarDetails open={open} closeModel={() => setOpen(false)} car={car} />

        </div>
    )
}

export default CarCard;
