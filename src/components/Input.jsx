import React, { useState } from 'react'
import '/assets/styles/Components.css'

const Input = ({ type, placeholder, value, onChange, style, children }) => {
    const [inputValue, setInputValue] = useState(value)
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    }
    
    return (
        <input
            className='basic-input'
            type={type ? type : 'text'}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            style={style}
        >
            {children}
        </input>
    )
}

export default Input