import React from 'react'
import '../../assets/scss/_productHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function ProductHeader() {
    return (
        <div>
            <div className='container header-background d-flex mt-5'>
                <h2>Best holiday offers</h2>
                <h4>See all</h4>
                <FontAwesomeIcon className='arrow-right' icon={faArrowRight} size="1x"></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default ProductHeader
