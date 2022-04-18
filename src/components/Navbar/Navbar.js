import React, { Component } from 'react';
import logo from '../../assets/icons/logo.svg'
import "./Navbar.css"
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
class Navbar extends Component {
    render() {
        return (
            <div className='nb-outer-container'>
                {/* <h1>hey this is Navbar</h1> */}
                <div className='nb-inner-container'>
                    <div className='nb-left-inner-container'>
                        <img src={logo}></img>

                    </div>
                    <div className='nb-right-inner-container'>
                        <p>Location</p>
                        <p>Blogs</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                </div>
               <Section1/>
               <Section2/>
            </div>
        );
    }
}

export default Navbar;