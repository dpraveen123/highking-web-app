import React, { Component } from 'react';
import './Section7.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../assets/images/profile image.png'
import star from '../../assets/icons/Star.svg'
var SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: "absolute",
                borderLeft: "2.5px solid #747B81",
                borderTop: "2.5px solid #747B81",
                //   transform: "rotate(135deg)",
                transform: "translateX(0px) rotate(135deg) ",
                marginRight: "0px"
            }}
            onClick={onClick}
        />
    );
}

var SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: "absolute",
                borderLeft: "2.5px solid #747B81",
                borderTop: "2.5px solid #747B81",
                //   transform: "rotate(-45deg)",
                transform: "translateX(50px) rotate(-45deg) ",
                zIndex: 1,
                marginLeft: "-70px"

            }}
            onClick={onClick}
        />
    );
}
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    // infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerPadding:0,
    autoplay: true,
    autoplaySpeed: 3000,

    // centerMode: true,
    responsive: [
        {
            breakpoint: 2560,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            },
        },
        {
            breakpoint: 1205,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // centerMode: true,

            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
                // centerMode:true
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //   centerMode:true,
                arrows: false
            },
        }
    ]
};
class Section7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: ['1', '2', '3']
        }
    }

    render() {

        return (
            <div className='section7-outer-container'>
                <div className='section7-inner-container-headings'>
                    <p className='section7-inner-text1'>Happy Hikers</p>
                    <p className='section7-inner-text2'>Client’s Say About Us</p>
                </div>
                <div className='section7-slider'>
                    <Slider {...settings}  >
                        {
                            this.state.courses.map((l, i) => {
                                // console.log("l is ",data)
                                return (
                                    <div className='section7-slider-outer'>
                                        <div className='section7-slider-inner'>
                                            <div>


                                                <img src={image}></img>
                                            </div>
                                            <div>
                                                <p className='section7-text1'>Omar Gouse</p>
                                                <p className='section7-text2'>Happy Client</p>
                                                <p className='section7-text3'>“Everyone working in the office is very knowledgeable about all <br></br> types of dental work and options for your individual needs.”</p>

                                            </div>
                                            <div className='section7-stars'>
                                                <img src={star}></img>
                                                <img src={star}></img>
                                                <img src={star}></img>
                                                <img src={star}></img>
                                                <img src={star}></img>
                                            </div>

                                        </div>


                                        {/* <UpComingCourseCard data={l} /> */}
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Section7;