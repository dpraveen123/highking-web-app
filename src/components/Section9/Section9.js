import React, { Component } from 'react';
import './Secton9.css'
import image from '../../assets/icons/logo.svg'
import fbicon from '../../assets/icons/facebook.svg'
import twittericon from '../../assets/icons/twitter.svg'
import instaicon from '../../assets/icons/insta.svg'
class Section9 extends Component {
    render() {
        return (
            <div>
            <div className='section9-outer-container'>
                <div className='section9-inner-container'>
                    <div className='section9-inner-left-container'>
                        <div>
                            <img src={image}></img>
                        </div>
                        <div>
                            <p className='section9-footer-text'>
                                We envision a world where<br></br> everyone feels welcome in the<br></br> American hiking community.
                            </p>
                        </div>
                        <div className='section9-icons'>
                            <img src={fbicon}></img>
                            <img src={twittericon}></img>
                            <img src={instaicon}></img>
                        </div>
                    </div>
                    <div className='secion9-inner-right-container'>
                        <div>
                            <p className='section9-header'>Location</p>
                            <p className='section9-text-footer'>America</p>
                            <p className='section9-text-footer'>Asia</p>
                            <p className='section9-text-footer'>Europe</p>
                            <p className='section9-text-footer'>Africa</p>
                        </div>
                        <div>
                            <p className='section9-header'>Contact</p>
                            <p className='section9-text-footer'>About Me</p>
                            <p className='section9-text-footer'>Teams</p>
                            <p className='section9-text-footer'>Profile</p>
                            <p className='section9-text-footer'>FAQ</p>
                        </div>
                        <div>
                            <p className='section9-header'>Legals</p>
                            <p className='section9-text-footer'>Privacy</p>
                            <p className='section9-text-footer'>Disclaimer</p>
                            <p className='section9-text-footer'>Terms</p>
                            <p className='section9-text-footer'>Company</p>
                        </div>

                    </div>

                </div>
                
            </div>
            <div>
            <p className='secton9-footer-ccopyright-text'>Copyright © 2021. All Right Reserved.</p>
        </div>
        </div>
        );
    }
}

export default Section9;