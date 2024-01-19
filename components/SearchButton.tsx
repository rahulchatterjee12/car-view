import Image from 'next/image'
import React from 'react'

const SearchButton = ({ otherClass }: { otherClass: string }) => {
    return (
        <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
            <Image
                src='/magnifying-glass.svg'
                width={40}
                height={40}
                alt='search'
                className='object-contain'
            />
        </button>
    )
}

export default SearchButton;