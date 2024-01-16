"use client";

import { CustomBtnProps } from '@/types';
import React from 'react'

const CustomBtn = ({ title, containerStyles, handleClick, type }: CustomBtnProps) => {
    return (
        <button
            disabled={false}
            type={'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`} >{title}</span>
        </button>
    )
}

export default CustomBtn
