import React, { Component } from 'react';
import './Section6.css'
import image from '../../assets/images/lets enjoy nature with us.png'
class Section6 extends Component {
    render() {
        return (
            <div className='section6-outer-container'>
                <div className='section6-inner-container'>
                    <div className='section6-inner-left-container'>
                        <img src={image}></img>
                    </div>
                    <div className='section6-inner-right-container'>
                        <p className='section6-left-heading'>
                        Let’s Enjoy Nature With Us
                        </p>
                        <p className='section6-left-para'>
                        Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.
                        </p>
                        <button className='section6-contact-button'>Learn More</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default Section6;