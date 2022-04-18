import React, { Component } from 'react';
import './Section8.css'
import emailicon from '../../assets/icons/mail.svg'

class Section8 extends Component {
    render() {
        return (
            <div className='section8-outer-container'>
                <div className='section8-inner-container'>
                    <p className='section8-text1'>
                        Subscribe to Our Newsletter
                        For Weekly Article Update.
                    </p>
                    <p className='section8-text2'>
                        We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.
                    </p>
                    <div className='section8-buttons'>
                        <input type="email" className='section8-input-email' placeholder='Enter your Email address'></input>
                        <button className='section8-subscribe-button'>Subscribe</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Section8;