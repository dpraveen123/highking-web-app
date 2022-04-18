import React, { Component } from 'react';
import locationicon from '../../assets/icons/location.svg'
import shoeicon from '../../assets/icons/shoe.svg'
import bag from '../../assets/icons/bag.svg'
import './Section2.css'
class Section2 extends Component {
    render() {
        return (
            <div className='section2-outer-container1'>
                <div className='section2-outer-container'>
                    <div className='section2-inner-container'>
                        <div className='section2-card'>
                            <img src={locationicon}></img>
                            <p className='section2-card-heading'>Secret Locations</p>
                            <p className='section2-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href='#' className='section2-read'>Read more</a>
                        </div>

                    </div>
                    <div className='section2-inner-container'>
                        <div className='section2-card'>
                            <img src={shoeicon}></img>
                            <p className='section2-card-heading'>Safe Adventure</p>
                            <p className='section2-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href='#' className='section2-read'>Read more</a>
                        </div>

                    </div>
                    <div className='section2-inner-container'>
                        <div className='section2-card'>
                            <img src={bag}></img>
                            <p className='section2-card-heading'>Professional Hikers</p>
                            <p className='section2-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href='#' className='section2-read'>Read more</a>
                        </div>

                    </div>
                </div>
                <div className='section2-bottom-text'>
                    <p className='section2-bottom-left-text'>Don’t hesitate to contact us to get better Information.</p>
                    <p className='section2-bottom-right-text'>EXPLORE ALL TREKKING.</p>
                </div>

            </div>
        );
    }
}

export default Section2;