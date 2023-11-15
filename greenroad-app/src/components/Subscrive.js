import React from 'react'
import '../assets/scss/_subscrive.scss'
import product1 from '../assets/images/subscrive/photo.png'

function Subscrive() {
    return (
        <div>
            <section id='subscrive'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='sub-content'>
                                <h2 class="text-40 text-white">
                                    Get 5% off your 1st<br class="lg:d-none"></br>
                                    app booking
                                </h2>
                                <p class="mt-10 text-white">
                                    Booking's better on the app. Use promo code<br class="lg:d-none"></br>
                                    "TourBooking" to save!
                                </p>
                                <div class="text-18 text-white">
                                    Get a magic link sent to your email
                                </div>
                                <input type="email" placeholder="Email" class=""></input>
                                <button class="button"> Send</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src={product1} />
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Subscrive
