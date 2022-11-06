import React, { useState } from 'react'
import "../styles/Paypal.css";
import paypalbg from "../styles/paypalbg.png"
import paypalCard from "../styles/paypal-card.png"
import success from "../styles/ab.gif";


const Paypal = (props) => {
    const [openModal, setOpenModal] = useState(false);

    let placesName = props.nameOfPlace;
    let price1 = props.initialPrice;
    let numOfDays = props.daysSelected;

    const paymentSuccess = () => {
        setOpenModal(!openModal);
    }


    return (
        <div className='pa'>

            <div className='paypalbghold'>
                <img src={paypalbg} className="paypalbg" />
            </div>

            <div className='paypalCardHold'>
                <img src={paypalCard} className="paypalcard" />

            </div>

            {/* side bar */}

            <div className='figure-hold3'>
                <p className='val'> ${price1}  </p>

                <p className='val'> {numOfDays} days </p>

                <p className='val'> Fairbnb</p>
            </div>

            <div className='reciptFor'>
                <p>{placesName}</p>
            </div>




            <div className='heading-hold2'>
                days:
            </div>

            <div className='confirmnum'>
                <p>{Math.floor(Math.random() * (999 - 100 + 1) + 100)}ABKQ</p>
            </div>

            <div className='paypalLogo2'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/553128/PayPal.svg' />
            </div>



            {   /*  main card */}

            <div className='stayAt2'>
                <p>Stay At {placesName}</p>
            </div>

            <div className='totalCard2 flex gap-4 bg-white font-semibold'>
                <p>TOTAL</p>
                <p>${(price1 * numOfDays) + 240 + 65}</p>
            </div>

            <div className="hello2 flex flex-col absolute gap-3 bg-white italic  text-lg">
                <p>Hello Jamie</p>

                <p>You Are About To Pay ${(price1 * numOfDays) + 240 + 65}</p>
            </div>

            <div className='confirmHold2 absolute outline-none border-none'>

                <button className='uppercase btn change outline-none border-none' onClick={paymentSuccess}>Confirm to pay</button>
                <p> {openModal && 
                    <div class="success-animation">
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                    </div>} </p>
                    
            </div>

            <div className='whiteover'>

            </div>

            {/*  */}

            <div className='loader'>

            </div>









        </div>
    )
}


export default Paypal