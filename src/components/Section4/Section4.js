import React, { Component } from 'react';
import traveladvisor from '../../assets/icons/Travel Advisor.svg'
import unitedtravel from '../../assets/icons/United Travel.svg'
import travelchannel from '../../assets/icons/Travel Channel.svg'
import tripraja from '../../assets/icons/tripraja.svg'
import booking from '../../assets/icons/Booking.svg'
import './Section4.css'
class Section4 extends Component {
    render() {
        return (
            <div className='section4-outer-container'>
                <div className='section4-inner-container'>
                    <div>
                        <p className='section4-top-text'>Safe Journey</p>
                    </div>
                    <div>
                        <p className='section4-second-text'>Trusted by Big Companies </p>
                    </div>
                    <div className='section4-icons-top'>
                        <div>
                            <img src={traveladvisor}></img>
                        </div>
                        <div>
                            <img src={unitedtravel}></img>
                        </div>
                        <div>
                            <img src={travelchannel}></img>
                        </div>
                    </div>
                    <div className='section4-icons-bottom'>
                        <div className='section4-tripraja-icon'>
                            <img src={tripraja}></img>
                        </div>
                        <div>
                            <img src={booking}></img>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Section4;