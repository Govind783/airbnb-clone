import React from 'react'
import GooglePayButton from "@google-pay/button-react";
import "../styles/Card.css";
import creditCard from "../styles/side.png"
import wallet from "../styles/wal.png";
import { Link } from 'react-router-dom';
import { FaAirbnb } from "react-icons/fa";

const Card = () => {
    return (
        <div className='googlePayPaymentHold'>


            <div className='gpayAsset1Hold flex justify-end'>
                <img src={creditCard} className="cc" />
            </div>

            <br />
            <div className='flex mx-auto googlePayButtonContainer ml-4 mt-4 mb-20 md:ml-0 md:mt-0 md:mb-0'>
                <GooglePayButton className='' environment='TEST' paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: ["MASTERCARD", "VISA"]
                            },

                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "example",
                                    gatewayMerchantId: "exampleGatewayMerchantId",


                                },
                            },

                        },
                    ],
                    merchantInfo: {
                        merchantId: process.env.REACT_APP_MERCHANT_ID,
                        merchantName: "Demo Only"
                    },

                    transactionInfo: {

                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: "Total",
                        totalPrice: "500",
                        currencyCode: "USD",
                        countryCode: "US",
                    },
                }}
                    onLoadPaymentData={paymentData => {
                        console.log(paymentData.paymentMethodData);
                    }}

                />
            </div>


            <br />
            <div className='gpayAsset2Hold hidden lg:block'>
                <img src={wallet} className="wal" />

            </div>


        </div>
    )
}

export default Card

