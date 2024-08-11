import React, { useState } from 'react'
import './assets/Heros.css'

const TwoColumnsHero = ({ title, subtitle, children, style }) => {
    return (
        <section className='two-columns-hero' style={style}>
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
