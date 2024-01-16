"use client";

import React, { useState } from 'react'
import { SearchManufacturer } from '.';

const SearchBar = () => {
    const [manufacturar, setManufacturar] = useState([]);

    const handleSearch = () => {

    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturar={manufacturar}
                    setManufacturar={setManufacturar}
                />
            </div>
        </form>
    )
}

export default SearchBar;