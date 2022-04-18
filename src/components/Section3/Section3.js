import React, { Component } from 'react';
import './Section3.css'
import image from '../../assets/images/safe and affordable.png'
class Section3 extends Component {
    render() {
        return (
            <div className='section3-outer-container'>
                <div className='section3-inner-container'>
                    <div className='section3-inner-left-container'>
                        <img src={image}></img>
                    </div>
                    <div className='section3-inner-right-container'>
                        <p className='section3-left-heading'>
                        Safe, Affordable, And Trusted
                        </p>
                        <p className='section3-left-para'>
                        Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.
                        </p>
                        <button className='section3-contact-button'>Contact Us</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default Section3;