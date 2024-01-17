import React, { Fragment } from 'react'
import { CarProps } from '@/types';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

interface CarDetailsProps {
    open: boolean;
    closeModel: () => void;
    car: CarProps;
}

const CarDetails = ({ open, closeModel, car }: CarDetailsProps) => {
    return (
        <div>

        </div>
    )
}

export default CarDetails;