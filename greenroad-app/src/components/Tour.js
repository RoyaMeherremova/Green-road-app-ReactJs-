import React from 'react'
import '../assets/scss/_tour.scss'
import product1 from '../assets/images/product/product1.jpg'
function Tour() {
    return (
        <>
            <section id='tour'>
                <h2 className='mt-5'>Travel Articles</h2>
                <div className='row'>
                    <div className='col-4'>
                        <img src={product1} />
                        <div class="lh-13">April 06 2023</div>
                        <h3 className='title'>Kenya vs Tanzania Safari: The Better African Safari Experience</h3>
                    </div>
                    <div className='col-4'>
                        <img src={product1} />
                        <div class="lh-13">April 06 2023</div>
                        <h3 className='title'>Kenya vs Tanzania Safari: The Better African Safari Experience</h3>
                    </div>
                    <div className='col-4'>
                        <img src={product1} />
                        <div class="lh-13">April 06 2023</div>
                        <h3 className='title'>Kenya vs Tanzania Safari: The Better African Safari Experience</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tour
