import React from 'react';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturar, setManufacturar }: SearchManufacturerProps) => {
    return (
        <div>
            {manufacturar}
        </div>
    )
}

export default SearchManufacturer;