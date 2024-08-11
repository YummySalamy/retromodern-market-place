import React, {useState} from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './assets/Banners.css'

const DarkBanner = () => {
    return (
        <section className='dark-banner'>
            <div className='dark-banner__content'>
                <h1 className='dark-banner__title'>
                    Open Source Project
                </h1>
                <p className='dark-banner__subtitle'>
                    This project is open source. You can find the code on GitHub.
                </p>
            </div>
            <div className='dark-banner__decoration'>
                <a href='https://github.com/YummySalamy/retromodern-market-place' target='_blank'className='dark-banner__github-link'>
                    <FaGithub className='dark-banner__decoration-icon' style={{fontSize: '2rem'}} />
                </a>
                {/* <a href='' className='dark-banner__decoration-link'>
                    <FaGithub className='dark-banner__decoration-icon' />
                </a>
                <a href='' className='dark-banner__decoration-link'>
                    <FaLinkedin className='dark-banner__decoration-icon' />
                </a> */}
            </div>
        </section>
    )
}

export default DarkBanner