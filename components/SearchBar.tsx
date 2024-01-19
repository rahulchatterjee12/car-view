"use client";

import React, { useState } from 'react'
import { SearchButton, SearchManufacturer } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [manufacturar, setManufacturar] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturar === '') return alert('Please select a manufacturer');
        if (model === '') return alert('Please select a model');
        updateSearchParams(model.toLowerCase(), manufacturar.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set('model', model);
        }
        else {
            searchParams.delete('model');
        }
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        }
        else {
            searchParams.delete('manufacturer');
        }
        const newPath = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPath)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturar={manufacturar}
                    setManufacturar={setManufacturar}
                />
                <SearchButton otherClass='sm:hidden' />
            </div>

            <div className='searchbar__item'>
                <Image src='/model-icon.png'
                    width={25}
                    height={25}
                    alt='car model'
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input
                    type="text"
                    name='model'
                    value={model}
                    placeholder='Model'
                    className='searchbar__input'
                    onChange={(e) => setModel(e.target.value)}
                />
                <SearchButton otherClass='sm:hidden' />
            </div>
            <SearchButton otherClass='max-sm:hidden' />

        </form>
    )
}

export default SearchBar;