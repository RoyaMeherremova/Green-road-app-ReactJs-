import React from 'react'
import '../assets/scss/_review.scss'
import Carousel from 'react-bootstrap/Carousel';
import review1 from '../assets/images/review/comma.png'
import custom from '../assets/images/customer/custom.jpg'
function Review() {
    return (
        <div>
            <section id='review'>
                <h2 className='text-center'>Customer Reviews</h2>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img className='comma' src={review1} />
                        <div className='slide-cont'>
                            <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                            <div>Ali Tufan</div>
                            <div>Product Manager, Apple Inc</div>
                            <div className='custom-img'>
                                <img src={custom} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='comma' src={review1} />
                        <div className='slide-cont'>
                            <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                            <div>Ali Tufan</div>
                            <div>Product Manager, Apple Inc</div>
                            <div className='custom-img'>
                                <img src={custom} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='comma' src={review1} />
                        <div className='slide-cont'>
                            <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                            <div>Ali Tufan</div>
                            <div>Product Manager, Apple Inc</div>
                            <div className='custom-img'>
                                <img src={custom} />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

        </div>
    )
}

export default Review
