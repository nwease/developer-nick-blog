import React from 'react';
import '../css/Banner.css';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner__image' />

            <div className='banner__container'>
                <div className='banner__name'>
                    Developer Nick
                </div>

                <div className='banner__greeting'>
                    Welcome to my developer blog!
                </div>
            </div>
        </div>
    );
}

export default Banner;