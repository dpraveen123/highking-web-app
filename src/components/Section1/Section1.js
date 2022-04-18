import React, { Component } from 'react';
import image1 from '../../assets/images/be prepared image.png'
import './Section1.css'
class Section1 extends Component {
    render() {
        return (
            <div  className='section1-outer-container'>
                 <div className='section1-inner-container'>
                    <div className='section1-inner-left-container'>
                        <div className='section1-left-heading'>
                            <p>
                                Be prepared for the mountains and beyond.
                            </p>
                        </div>
                        
                        <div className='section1-left-text'>
                            <p>Are you looking for amazing hiking travel? Don’t worry! We got it for you!</p>
                        </div>
                        <div className='section1-left-buttons'>
                            <button className='section1-contact-button'>Contact Us</button>
                            <button className='section1-video-button'>Watch Video</button>
                        </div>
                    </div>
                    <div className='section1-inner-right-container'>
                        <img src={image1}></img>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Section1;