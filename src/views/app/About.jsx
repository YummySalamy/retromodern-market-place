import React, { useState } from 'react'
import TwoColumnsHero from '../../components/heros/TwoColumnsHero';
import DarkBanner from '../../components/banners/DarkBanner';
import Mockup from '/images/Image1.png';
import './assets/App.css';

const About = () => {
    return (
        <div className='main-page'>
            <TwoColumnsHero title='About Us' subtitle='Learn more about MarketPlace'>
                <div className='two-columns-hero__content'>
                    <p>MarketPlace is a platform where you can buy and sell products. We have a wide range of products available for you to choose from.</p>
                    <p>Our platform is easy to use and you can start buying and selling products in no time.</p>
                </div>
            </TwoColumnsHero>
            <DarkBanner />
            <TwoColumnsHero title='Retro and Modern Design' subtitle='During the project planning phase, we were inspired by the retro and modern design styles. Combining these two styles, we created a unique design for MarketPlace.'>
                <img src={Mockup} alt='retromodern-mockup' className='two-columns-hero__image' />
            </TwoColumnsHero>
        </div>
    )
}

export default About;