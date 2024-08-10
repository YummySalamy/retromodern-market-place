import React, { useState } from 'react'
import './assets/Heros.css'

const SearchHero = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = () => {
        console.log(`Searching for ${searchValue}`)
    }

    return (
        <section className='search-hero'>
            <div className='search-hero__title'>
                <h1>Search for products</h1>
            </div>
            <div className='search-hero__input'>
                <input
                    className='search-hero__input-field'
                    type='text'
                    placeholder='Search for products'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className='search-hero__input-button' onClick={handleSearch}>Search</button>
            </div>
        </section>
    )
}

export default SearchHero