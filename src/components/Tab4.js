import React from 'react'

import { placesStore } from '../store/Store'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import "../styles/Tab1.css";
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';

const Tab4 = () => {
    return (
        <div>
            <div className='tab1-hold'>
                {placesStore.map((item => {
                    if (item.type === "beaches") {
                        return (
                            <div className="card w-96" key={item.id}>

                                <Link to={`/${item.id}`}>

                                <img src={item.homeMainPic} className="resImg" />

                                    <div className="card-body">
                                        <h2 className='font-semibold relative prod-name'>{item.name}</h2>
                                        <p className='prod-price text-center'>${item.price}</p>
                                        <p className='prod-star relative  text-2xl'>  {item.stars}</p>
                                        <AiFillStar className='star-icon relative'></AiFillStar>
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

export default Tab4