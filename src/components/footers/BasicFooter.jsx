import React from 'react'
import './assets/Footers.css';
import { Link } from 'react-router-dom';

const BasicFooter = () => {
    return (
        <footer className='basic-footer'>
            <div className='basic-footer__left-column'>
                <h1 className='basic-footer__title'>
                    Footer Title
                </h1>
                <p className='basic-footer__subtitle'>
                    Footer Subtitle
                </p>
            </div>
            <div className='basic-footer__right-column'>
                <Link className='basic-footer__link' to='/'>
                    Home
                </Link>
                <Link className='basic-footer__link' to='/about'>
                    About
                </Link>
                <Link className='basic-footer__link' to='/contact'>
                    Contact
                </Link>
            </div>
        </footer>
    )
}

export default BasicFooter
