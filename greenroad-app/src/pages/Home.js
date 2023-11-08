import React from 'react'
import Banner from '../components/home/Banner'
import Slider from '../components/home/Slider'
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'
function Home() {
    return (
        <div>
            <section id='header'><Navigation /> </section>
            <section id='main'>
                <Slider />
                <Banner />
            </section>
            <section id='footer'><Footer /></section>
        </div>
    )
}

export default Home
