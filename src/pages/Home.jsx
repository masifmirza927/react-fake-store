import React from 'react'

import Header from '../components/header/Header'
import headerBg from "../images/header-bg.avif"
import Features from '../components/features/Features'
import Category from '../components/category/Category'
import Product from '../components/products/Product'

const Home = () => {
    return (
        <>
            <div className='header' style={{ backgroundImage: `url(${headerBg})` }}>
                <Header />
                <Features />
                <Category />
                <Product />
            </div>
        </>
    )
}

export default Home