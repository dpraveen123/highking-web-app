import React, { Component } from 'react';
import './Section5.css'
import image from '../../assets/images/enjoy your life.png'

class Section5 extends Component {
    render() {
        return (
            <div className='section5-outer-container'>
                <div className='section5-inner-container'>
                    <div className='section5-inner-left-container'>
                        <p className='section5-left-heading'>
                            Enjoy Your Life With Us Now!
                        </p>
                        <p className='section5-left-para'>
                            Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.
                        </p>
                        <button className='section5-contact-button'>Contact Us</button>
                    </div>

                    <div className='section5-inner-right-container'>
                        <img src={image}></img>
                    </div>

                </div>


            </div>
        );
    }
}

export default Section5;