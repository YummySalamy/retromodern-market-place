import React from "react";
import SearchHero from "../../components/heros/SearchHero";
import TwoColumnsHero from "../../components/heros/TwoColumnsHero";
import PopularProducts from "../../components/products/PopularProducts";
import './assets/App.css'

const MainPage = () => {
    return (
        <div className='main-page'>
            <TwoColumnsHero title='Welcome to MarketPlace' subtitle='The best place to buy and sell products'>
                <div className='two-columns-hero__content'>
                <p>MarketPlace is a platform where you can buy and sell products. We have a wide range of products available for you to choose from.</p>
                <p>Our platform is easy to use and you can start buying and selling products in no time.</p>
                </div>
            </TwoColumnsHero>
            <SearchHero />
            <PopularProducts />
        </div>
      )
}

export default MainPage;