import React, { useState } from 'react'
import TwoColumnsHero from '../../components/heros/TwoColumnsHero';
import './assets/App.css';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSendEmail = () => {
        const emailto = 'carsebastian1013@gmail.com'
        const subject = 'Contact Form Submission'
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        window.open(`mailto:${emailto}?subject=${subject}&body=${body}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Message:', message)
        handleSendEmail()
    }

    return (
        <section className='contact'>
            <TwoColumnsHero title='Contact Us' subtitle='We would love to hear from you'>
            <form className='contact__form' onSubmit={handleSubmit}>
                <span className='contact__form-label'>Name</span>
                <input
                    className='contact__input'
                    type='text'
                    placeholder='Ex: John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <span className='contact__form-label'>Email</span>
                <input
                    className='contact__input'
                    type='email'
                    placeholder='Ex: john@mail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className='contact__form-label'>Message</span>
                <textarea
                    className='contact__textarea'
                    placeholder='Enter your message here'
                    value={message}
                    rows={5}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className='contact__button' type='submit'>
                    Submit
                </button>
            </form>
            </TwoColumnsHero>
        </section>
    )
}

export default Contact