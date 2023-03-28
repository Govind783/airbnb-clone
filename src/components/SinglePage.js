import React from 'react'
import { useParams } from 'react-router-dom'
import { placesStore } from '../store/Store'
import "../styles/SinglePage.css"
import { FaAirbnb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"
import { IoMdThumbsUp } from "react-icons/io"
import { FaKey } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { RiMedal2Fill } from "react-icons/ri";
import CalendarFunc from './Calendar';
import { useState } from 'react';
import SinglePageMiddle from './SinglePageMiddle';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { createContext } from 'react';
import "../styles/Tabs.css";

const SinglePage = () => {

    const [buttonOpen, setButtonOpen] = useState(false);
    const [buttonClose, setButtonClose] = useState(true);




    const IdContext = createContext();

    const buttonOpenHandler = (event) => {
        event.preventDefault();
        setButtonOpen(true)
        setButtonClose(false)
    }

    const buttonCloseHandler = (event) => {
        event.preventDefault();
        setButtonClose(false);
        setButtonOpen(false)

    }

    const params = useParams();
    const { id } = params;

    const placeClicked = placesStore.find((item) => item.id === id)

    const { name, homeMainPic, price, stars, carouselPic1, carouselPic2, carouselPic3, carouselPic4, carouselPic5 } = placeClicked || {}

    const [activeImg, setActiveImg] = useState(false);

    const [defaltImage, setDefaultImage] = useState(carouselPic1);


    const getImageSrcHnadler = (e) => {
        setDefaultImage(e.target.src)
        setActiveImg(true)
    }

    const setDefaultImgHnadler = () => {
        setDefaultImage(carouselPic1)
        setActiveImg(false);
    }


    return (

        <div>

            <div className='basicDeatils flex flex-row text-lg'>
                <p className='font-semibold uppercase'>{name}</p>
                <div className=''>
                    <FaStar className=' text-xl inline-block mr-2 ' />
                    <p className=' inline-block'> {stars} </p>
                </div>
                <p className=''>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews</p>

            </div>





            {activeImg === true ? <img src={defaltImage} className="single-page-main-pic cursor-pointer" /> : <img src={carouselPic1} className="single-page-main-pic cursor-pointer" />}


            <div className='absolute flex single-page-hold'>
                <img src={carouselPic2} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic3} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic4} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic5} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
            </div>

            <p className='features-text text-2xl font-semibold uppercase'>Entire rental unit hosted by Ben  </p>

            <p className='actual-features text-xl'>{Math.floor(Math.random() * 6) + 3} guests . {Math.floor(Math.random() * 6) + 1} . bedrooms {Math.floor(Math.random() * 5) + 3} beds . {Math.floor(Math.random() * 2) + 3}  bathrooms</p>

            <p className='line1 text-gray-300'>__________________________________________________________________________________________________________</p>
            <p className='line2 text-gray-300'>__________________________________________________________________________________________________________</p>




            <div className='icon-hold'>
                <RiMedal2Fill className='text-3xl' />
                <FaKey className='text-3xl' />
                <FaCalendarCheck className='text-3xl' />
            </div>

            <div className='heading-hold'>
                <p className='text-xl font-semibold'>Ben is a Superhost. </p>
                <p className='text-xl font-semibold'>Great check-in experience.  </p>
                <p className='text-xl font-semibold'>Free cancellation for 48 hours. </p>
            </div>

            <div className='description-hold'>
                <p> highly rated hosts who are committed to providing great stays for their guests.</p>
                <p className='-mt-4 sm:mt-0'>90% of recent guests gave the check-in process a 5-star rating.</p>
                <p className='mt-4 sm:mt-0'>No questions asked.</p>

            </div>

            <div className='side-box-card absolute'>
                <p className='single-page-price font-semibold text-2xl'> ${price}/ Night   </p>

                <div className='ab'>
                    <FaStar />
                </div>

                <p className='rev-card absolute'>{stars}</p>
                <p className='rev2-card font-semibold'> <p>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews</p>  </p>

            </div>

            <div className='reserve-date-button-holder'>
                <button className='reserve-date-button rounded-xl' onClick={buttonOpenHandler}> Reserve</button>

            </div>


            <div className="s">
                <CalendarFunc placesId={id} placesNam={name} placesPic={carouselPic1} buttonopenState={buttonOpen} buttonCloseState={buttonClose} closeFunc={buttonCloseHandler} />
            </div>

            <div className='expense-title-hold'>
                <p>Servicing Fee</p>
                <p>Cleaning Fee</p>
                <p>Processing Fee</p>
            </div>

            <div className='calculated-expense-hold'>

                <p className='relative w-40 le'>calculated at next step</p>
                <p>180</p>
                <p>230</p>
                <p>450</p>

            </div>
            <div className='line-total text-gray-300'>_____________________________________________________</div>

            <div className='price-total-text absolute font-semibold text-xl uppercase'>Total</div>

            <p className='price-total absolute font-semibold text-xl'>Calculated At Checkout</p>


            <SinglePageMiddle />

            <Footer1 />

            <Footer2 />


        </div>
    )
}


export default SinglePage;
