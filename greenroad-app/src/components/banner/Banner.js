import React from 'react'
import '../../assets/scss/_banner.scss'
import banner1 from '../../assets/images/banner/banner1.jpg'
import banner2 from '../../assets/images/banner/banner2.jpg'
import banner3 from '../../assets/images/banner/banner3.jpg'



function Banner() {
    return (
        <section id='banner'>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-4'>
                        <div className='wpb_wrapper d-flex'>
                            <img className='banner-img' src={banner1} />
                            <div class="content">
                                <h3 class="title">Guided by local experts</h3>
                                <div class="desc">on life and culture in their city</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='wpb_wrapper d-flex'>
                            <img className='banner-image' src={banner2} />
                            <div class="content">
                                <h3 class="title" style={{ marginLeft: '25px' }}>Top Rated in Azerbaijan</h3>
                                <div class="desc" style={{ marginLeft: '25px' }}>1000+ reviews on Tripadvisor</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='wpb_wrapper d-flex'>
                            <img className='banner-img' src={banner3} />
                            <div class="content">
                                <h3 class="title">Top Rated in Azerbaijan</h3>
                                <div class="desc">1000+ reviews on Tripadvisor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Banner
