import React from 'react'
import '../../assets/scss/_category.scss'
import product1 from '../../assets/images/product/product1.jpg'

function Category() {
    return (
        <>
            <section id='category'>
                <div className='d-flex' style={{ gap: "29px" }}>
                    <div className='cruis'>
                        <div>
                            <img src={product1} />
                            <h4>Cruises</h4>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex' style={{ gap: "29px" }}>
                            <div className='small-categ'>
                                <img src={product1} />
                                <h4>Beach Tours</h4>
                            </div>
                            <div className='cityy'>
                                <img src={product1} />
                                <h4>Museum Tour</h4>
                            </div>

                        </div>
                        <div className='d-flex' style={{ gap: "29px" }}>
                            <div className='small-categ'>
                                <img src={product1} />
                                <h4>City Tours</h4>

                            </div>
                            <div className='food-categ'>
                                <img src={product1} />
                                <h4>Food</h4>
                            </div>
                            <div className='small-categ'>
                                <img src={product1} />
                                <h4>Hiking</h4>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default Category
