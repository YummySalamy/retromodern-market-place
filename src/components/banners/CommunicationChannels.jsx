import React, { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa'
import './assets/Banners.css'

const channels_list = [
    {
        icon: <FaEnvelope />,
        title: 'Email',
        handle_click: () => {
            window.open('mailto:carsebastian1013@gmail.com')
        }
    },
    {
        icon: <FaWhatsapp />,
        title: 'WhatsApp',
        handle_click: () => {
            window.open('https://wa.me/573216371230')
        }
    },
    {
        icon: <FaGithub />,
        title: 'GitHub',
        handle_click: () => {
            window.open('https://github.com/YummySalamy')
        }
    }
];

const CommunicationChannels = () => {
    const [sliderData] = useState(channels_list);

    return (
        <section className='communication-channels'>
            <h1 className='communication-channels__title'>
                Communication Channels
            </h1>
            <div className='communication-channels__list'>
                {sliderData.map((channel, index) => (
                    <div key={index} className='communication-channels__item' onClick={channel.handle_click}>
                        <div className='communication-channels__icon'>
                            {channel.icon}
                        </div>
                        <p className='communication-channels__channel'>
                            {channel.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CommunicationChannels


