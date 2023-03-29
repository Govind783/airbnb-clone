import React from 'react'

import { placesStore } from '../store/Store'
import "../styles/Tab1.css";
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FiHeart } from "react-icons/fi"
import { IoBedOutline } from "react-icons/io5"
import { GiBathtub } from "react-icons/gi"
import { BsStars } from "react-icons/bs"
import { BiBuildingHouse } from "react-icons/bi"
import { Pagination } from "swiper";



const Tab8 = () => {


    return (
        <div>
            <div className='tab1-hold flex justify-center md:mb-48 mb-28 items-center sm:gap-12 gap-0 -mt-16 flex-wrap w-full'>
                {placesStore.map((item => {
                    if (item.type === "view") {
                        return (
                            <div className='card boxsh' key={item.id}>

                                <Link to={`/${item.id}`}>

                                    <Swiper
                                        spaceBetween={5}
                                        slidesPerView={1}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        loop={true}
                                        observer={true}
                                        observeParents={true}
                                        parallax={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}

                                    >
                                        <SwiperSlide>
                                            <img src={item.homeMainPic} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic1} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic2} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic3} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic4} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic5} className="cardImg" />
                                        </SwiperSlide>

                                    </Swiper>

                                    {item.pets && <div className='flex label'> <BsStars /> POPULAR </div>}

                                    <div className='flex gap-0 pl-3 pr-3 justify-between'>

                                        <div className='flex'>
                                            <p className=' text-violet-600 font-semibold mr-1 text-2xl'> ${item.price.toLocaleString()}</p>
                                            <p className='text-gray-400 text-sm pt-2'> /month </p>
                                        </div>

                                        <FiHeart className='text-sm heartCrad  boxsh' />

                                    </div>

                                    <p className='text-2xl pl-3'> {item.name} </p>

                                    <p className='text-gray-400 text-sm pl-3 mb-3 mt-2'> 2699 Green Valley hughland lake ... </p>
                                    <hr className='mb-4' />

                                    <div className='flex justify-center pl-2 gap-4 md:gap-3'>
                                        <span className='flex items-center'> <IoBedOutline className=' md:text-2xl text-xl mr-2' /> <p className='text-sm text-gray-400 w-16'>{Math.floor(Math.random() * 5) + 2} beds </p></span>
                                        <span className='flex items-center'> <GiBathtub className=' md:text-2xl text-xl mr-2' /> <p className='text-sm text-gray-400 w-16'>{Math.floor(Math.random() * 5) + 2} bath </p> </span>
                                        <span className='flex items-center'> <BiBuildingHouse className=' md:text-2xl text-xl mr-2' /> <p className='text-sm text-gray-400 w-16'> {Math.floor(Math.random() * 2) + 2} floors </p></span>

                                    </div>

                                </Link>
                            </div>
                        )
                    }

                }))}
            </div>

        </div>
    )


}

export default Tab8