import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../assets/scss/_slider.scss'
import slider1 from '../assets/images/slider/slider1.jpg'
import slider2 from '../assets/images/slider/slider2.jpg'
// import slider3 from '../../assets/images/slider/h3-slider-background-3.jpg'

// const images = [slider1, slider2, slider3];


function Slider() {
    return (
        <section id='slider'>
            <Carousel interval={null}>
                <Carousel.Item>
                    <img className='slide' src={slider1} />
                    <Carousel.Caption>
                        <div className='slide-content'>
                            <h1>Tranquil nature</h1>
                            <h1>Dynamic city</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='slide' src={slider2} />
                    <Carousel.Caption>
                        <div className='slide-content'>
                            <h1>Send <span>flowers</span> like</h1>
                            <h1>you mean it</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='slide' src={slider1} />
                    <Carousel.Caption>
                        <div className='slide-content'>
                            <h1>Tranquil nature</h1>
                            <h1>Dynamic city</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>

    );
}

export default Slider
