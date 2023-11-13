import React from 'react'
import '../assets/scss/_home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Product from '../components/common/Product'
import Advertising from '../components/home/Banner'
import Slider from '../components/home/Slider'
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'
import Category from '../components/Category';
import Banner from '../components/home/Banner';

function Home() {
    return (
        <div>
            <div className='container'>
                <section id='header'>
                    <Navigation />
                </section>
                <section id='main'>
                    <Slider />
                    <h2 className='header-categ mt-5'>Popular things to do</h2>
                    <Category />
                    <h2>Why choose Greenroad</h2>
                    <Banner />
                    <div className='header-background d-flex mt-5'>
                        <h2>Best holiday offers</h2>
                        <h4> See all</h4>
                        <FontAwesomeIcon className='arrow-right' icon={faArrowRight} size="1x"></FontAwesomeIcon>
                    </div>
                    <Product />
                </section>
                <section id='footer'><Footer /></section>
            </div>

        </div>
    )
}

export default Home
