import React from 'react'
import '../assets/scss/_home.scss';
import Slider from '../components/Slider'
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'
import Category from '../components/category/Category';
import Banner from '../components/banner/Banner';
import CategoryHeader from '../components/category/CategoryHeader';
import BannerHeader from '../components/banner/BannerHeader';
import Review from '../components/Review';
import Product from '../components/common/Product';
import ProductHeader from '../components/common/ProductHeader';
import Tour from '../components/Tour';
import Subscrive from '../components/Subscrive';

function Home() {
    return (
        <div>
            <section id='header'>
                <Navigation />
            </section>
            <section id='main'>
                <Slider />
                <CategoryHeader />
                <Category />
                <BannerHeader />
                <Banner />
                <ProductHeader />
                <Product />
                <Review />
                <Tour />
                <Subscrive />
            </section>
            <section id='footer'><Footer /></section>
        </div>
    )
}

export default Home
