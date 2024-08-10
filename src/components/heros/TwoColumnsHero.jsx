import React, { useState } from 'react'
import './assets/Heros.css'

const TwoColumnsHero = ({ title, subtitle, children }) => {
    return (
        <section className='two-columns-hero'>
            <div className='two-columns-hero__left-column'>
                <h1 className='two-columns-hero__title'>
                    {title}
                </h1>
                <p className='two-columns-hero__subtitle'>
                    {subtitle}
                </p>
            </div>
            <div className='two-columns-hero__right-column'>
                {children}  
            </div>
        </section>
    )
}

export default TwoColumnsHero
