import React from 'react'
import { placesStore } from '../store/Store'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import "../styles/Tab1.css";
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//TAB 1 = TROPICAL 



const Tab1 = ({pushDown}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div>
            <div className= 'tab1-hold'>
                {placesStore.map((item => {
                    if (item.type === "tropical") {
                        return (
                            <div className="card w-96" key={item.id}>

                                <Link to={`/${item.id}`}>
                                    <Slider {...settings} >
                                        <img src={item.homeMainPic} className="i resImg" />
                                        <img src={item.carouselPic1} className="i restImg" />
                                        <img src={item.carouselPic2} className="i restImg" />
                                        <img src={item.carouselPic3} className="i restImg" />
                                        <img src={item.carouselPic4} className="i restImg" />
                                        <img src={item.carouselPic5} className="i restImg" />
                                    </Slider>
                                </Link>


                                <div className="card-body">
                                    <h2 className='font-semibold relative prod-name'>{item.name}</h2>
                                    <p className='prod-price text-center'>${item.price}</p>
                                    <p className='prod-star relative  text-2xl'>  {item.stars}</p>
                                    <AiFillStar className='star-icon relative'></AiFillStar>
                                </div>

                            </div>
                        )
                    }

                }))}
            </div>

        </div>
    )
}

export default Tab1

