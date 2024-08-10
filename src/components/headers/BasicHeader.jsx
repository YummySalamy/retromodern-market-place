import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './assets/Headers.css'

const navItems = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Contact',
        link: '/contact'
    }
    ]

const BasicHeader = ({ icon, title, children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header 
        className='basic-header' 
        style={{ 
            borderTopLeftRadius: hasScrolled ? 0 : '8px',
            borderTopRightRadius: hasScrolled ? 0 : '8px',
            backgroundColor: hasScrolled ? '#d8ded3' : 'transparent',
            // background: hasScrolled ? 'linear-gradient(145deg, #ff4d6d, #f1f7ed)' : 'transparent',
        }}
    >
        <div className='basic-header__icon'>
            {icon}
        </div>
        <h1 className='basic-header__title'>
            {title}
        </h1>
        {children ? children : (
            <nav className='basic-header__nav'>
                {navItems.map((item, index) => (
                    <a key={index} href
                    ={item.link} className='basic-header__nav-item'>
                        {item.title}
                    </a>
                ))}
            </nav>
        )}
    </header>
    )
}

export default BasicHeader

