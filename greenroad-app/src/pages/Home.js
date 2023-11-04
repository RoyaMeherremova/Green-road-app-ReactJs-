import React from 'react'
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'
function Home() {
    return (
        <div>
            <section id='header'><Navigation /> </section>
            <section id='main'></section>
            <section id='footer'><Footer /></section>
        </div>
    )
}

export default Home
