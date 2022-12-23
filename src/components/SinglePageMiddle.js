import React from 'react'
import "../styles/SinglePageMiddle.css"
import section3 from "../../src/styles/av.png"
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import { placesStore } from '../store/Store'
import rev1 from "../styles/stars1.png"
import rev2 from "../styles/stars2.png"
import reviews from "../styles/rev.png";
import modalPic from "../styles/pic.png"




const SinglePageMiddle = () => {

    const params = useParams();
    const { id } = params;

    const placeClicked = placesStore.find((item) => item.id === id)

    const { stars } = placeClicked || {}

    return (<div>

        <p className='spmLine text-gray-300'>__________________________________________________________________________________________________________</p>

        <div className='section1-hold'>
            <img src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' className='w-36' />

            <p>Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.</p>

            <p className='font-bold text-xl underline'>Learn more</p>
        </div>

        <p className='spmLine2 text-gray-300'>__________________________________________________________________________________________________________</p>

        <div className='section2-hold'>
            <p>Your perfect little staycation in Bali is right here. We take relaxation seriously.</p>
            <p>Hideout is a unique eco stay hidden in the mountains of Gunung Agung volcano
                - far from the city life it acts as the perfect hideaway for all adventurous travellers.
                We are honoured to be the number 4. most wished accommodation at Airbnb in the </p>

            <p className="font-bold text-xl underline">Show more</p>

        </div>

        <div className='section3'>
            <img src={section3} className="c" />
        </div>

        <p className='spmLine3 text-gray-300'>__________________________________________________________________________________________________________</p>


        <div className='spm-star'>
            <FaStar className='text-2xl st' />
        </div>

        <p className='spm-rev text-2xl'>{stars}</p>

        <div className='star-calc-hold'>

            <img src={rev1} className="spm-pic" />
            <img src={rev2} className="spm-pic" />

        </div>

        <div className='review-hold'>

            <img src={reviews} className="spm-review" />

        </div>

        <button className='' onClick={(e) => e.preventDefault()}></button>

        <div className='agg'>

            <label htmlFor="my-modal-5" className="modal-button spm-rev-btn rounded-2xl btn">Show 15 More Reviews</label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor="my-modal-5" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <FaStar className='modal-star' />
                    <p className='modal-review font-semibold'>{stars}, 15 reviews</p>



                    <img src={modalPic} className="modal-pic" />

                    <div className='modal-hold'>

                        <h3 className="text-lg font-bold uppercase">~ Great stay</h3>
                        <p className="py-4">We stayed in Horizon and in Hideout,
                            and for me this one is one with more soul, river sound is stunning,
                            chilling all day next to it is something special. It's more closed
                            upstairs. But still lots of animals around you, so be prepared!
                            Definitely nice experience. In quiet village, very nice to go
                            with scooter around,
                            to see real Bali, culture and people.</p>

                        <h3 className="text-lg font-bold uppercase">~ Fantastic</h3>
                        <p className="py-4">My partner and I had an amazing time here, such a pleasant retreat :)
                            thank you! We loved the nature, the bamboo living life, and the epic shower in the jungle.
                            They provided yoga mats on request which were really nice.</p>

                        <h3 className="text-lg font-bold uppercase">~ Supperb experience</h3>
                        <p className="py-4">The place was absolutely wonderful and everything we hoped it would be.
                            Being outside with nature was so special to us. The staff were wonderful and friendly.
                            The food was amazing!</p>

                        <h3 className="text-lg font-bold uppercase">~ Great experience</h3>
                        <p className="py-4">Our stay at Hideout Bali was amazing. We were thrilled with the cleanliness and beauty of the property.
                            We were greeted on our first day by some monitor lizards and they were fantastic. Food was great.
                            Thanks for an amazing stay!</p>

                        <h3 className="text-lg font-bold uppercase">~ Awe Struck</h3>
                        <p className="py-4">It was an exceptional experience, I brought my husband for a surprise trip on our honeymoon
                            and he loved it. We did see a snake in the stream outside on our last day and
                            I am happy about that if he witnessed anything of the sort on our first day we would
                            have to leave with immediate effect!</p>


                        <h3 className="text-lg font-bold uppercase">~ Great stay</h3>
                        <p className="py-4">We stayed in Horizon and in Hideout,
                            and for me this one is one with more soul, river sound is stunning,
                            chilling all day next to it is something special. It's more closed
                            upstairs. But still lots of animals around you, so be prepared!
                            Definitely nice experience. In quiet village, very nice to go
                            with scooter around,
                            to see real Bali, culture and people.</p>

                        <h3 className="text-lg font-bold uppercase">~ Fantastic</h3>
                        <p className="py-4">My partner and I had an amazing time here, such a pleasant retreat :)
                            thank you! We loved the nature, the bamboo living life, and the epic shower in the jungle.
                            They provided yoga mats on request which were really nice.</p>

                        <h3 className="text-lg font-bold uppercase">~ Supperb experience</h3>
                        <p className="py-4">The place was absolutely wonderful and everything we hoped it would be.
                            Being outside with nature was so special to us. The staff were wonderful and friendly.
                            The food was amazing!</p>

                        <h3 className="text-lg font-bold uppercase">~ Great experience</h3>
                        <p className="py-4">Our stay at Hideout Bali was amazing. We were thrilled with the cleanliness and beauty of the property.
                            We were greeted on our first day by some monitor lizards and they were fantastic. Food was great.
                            Thanks for an amazing stay!</p>

                        <h3 className="text-lg font-bold uppercase">~ Awe Struck</h3>
                        <p className="py-4">It was an exceptional experience, I brought my husband for a surprise trip on our honeymoon
                            and he loved it. We did see a snake in the stream outside on our last day and
                            I am happy about that if he witnessed anything of the sort on our first day we would
                            have to leave with immediate effect!</p>

                    </div>
                </label>
            </label>
        </div>
    </div>)

}

export default SinglePageMiddle