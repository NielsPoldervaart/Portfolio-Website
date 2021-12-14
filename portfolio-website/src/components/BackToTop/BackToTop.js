import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';
// import CircleType from `circletype`;
import './BackToTop.css';

const BackToTop = () => {
    return (
        <div className='BackTopButton'>
            <div className='CircleText'>
                <span>Back to top • Back to top • Back to top • Back to top • </span>
            </div>
            <div className='Arrow'>
                <IoIosArrowUp title='Back to top!' />
            </div>
        </div>
    )
}

export default BackToTop
