"use client";

import { CustomBtnProps } from '@/types';
import Image from 'next/image';
import React from 'react'

const CustomBtn = ({ title, containerStyles, handleClick, type, textStyles, disabled, rightIcon }: CustomBtnProps) => {
    return (
        <button
            disabled={disabled ? disabled : false}
            type={type ? type : 'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`} >{title}</span>
            {rightIcon && <div className='relative w-6 h-6'>
                <Image src={rightIcon} fill alt='Right Icon' className='object-contain' />
            </div>}
        </button>
    )
}

export default CustomBtn
