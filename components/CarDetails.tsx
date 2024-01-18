"use client"

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
        <Transition appear show={open} as={Fragment}>
            <Dialog as='div' className="relative z-10 "
                onClose={closeModel}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom='opacity-0 scale-90'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-90'
                        >
                            <Dialog.Panel >
                                <button
                                    type='button'
                                    onClick={closeModel}
                                >
                                    <Image
                                        src='/close.svg'
                                        alt='close'
                                        width={20}
                                        height={20}
                                        className='object-contain' />
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>

            </Dialog>
        </Transition>
    )
}

export default CarDetails;