import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './assets/Products.css'

const products_example = [
    {
        id: 1,
        title: 'Keychron K8 Pro',
        price: 99.99,
        image: 'https://www.keychron.uk/cdn/shop/products/Keychron-K8-Pro-QMK-VIA-Wireless-Mechanical-Keyboard-for-Mac-Windows-OSA-profile-PBT-keycaps-PCB-screw-in-stabilizer-with-hot-swappable-Gateron-G-Pro-mechanical-brown-switch.jpg?v=1657162589&width=1214'
    },
    {
        id: 2,
        title: 'Nothing Phone (2)',
        price: 499.99,
        image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1689349560/dcu6o6w4viqmeb5bhejx.png'
    },
    {
        id: 3,
        title: 'Nothing Ear (1)',
        price: 59.99,
        image: 'https://media.wired.com/photos/641b2cdca52b790517dbfea6/master/pass/Gear_review_16x9_1920x1080-(4).jpg'
    }
];

const PopularProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(products_example)
    }, [])

    return (
        <section className='popular-products'>
            <h2 className='popular-products__title'>Popular Products</h2>
            <div className='popular-products__grid'>
                {products.map((product, index) => (
                    <div key={index} className='popular-products__product'>
                        <img src={product.image} alt={product.title} className='popular-products__product-image' />
                        <h3 className='popular-products__product-title'>{product.title}</h3>
                        <p className='popular-products__product-price'>${product.price}</p>
                        <Link to={`/product/${product.id}`} className='popular-products__product-link'>View Product</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularProducts