import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import "../styles/Home.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';
import CalendarNavBar from './CalendarNavBar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { counterActions } from '../redux/State';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import Select from 'react-select';
import { IoLocationOutline } from "react-icons/io5";

import { LoginSocialGoogle } from 'reactjs-social-login';
import { StickyContainer, Sticky } from 'react-sticky';
import GoogleButton from 'react-google-button'

const Home = ({ toggle, setToggle }) => {

  const [inputValue, setInputeValue] = useState("");

  const [linkClickedVlaue, setLinkClickedValue] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  let [children, setChildren] = useState(0);

  let [infants, setInfants] = useState(0);

  const [verified, setVerified] = useState(false);

  const [userimage, setUserImage] = useState("");



  const adultsQuantity = useSelector((state) => state.counter.value);

  const dispacth = useDispatch();

  const increaeHandler = () => {
    dispacth(counterActions.increaseCount());
  }


  const decreaseHandler = () => {
    dispacth(counterActions.decrementCount());
  }

  const inputValueHandler = (e) => {
    setInputeValue(e.target.value);
  }

  const options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ]

  const childrenAdd = () => {
    setChildren(children + 1)
  }

  const childrenLess = () => {
    if (children <= 0) {
      return
    }
    else {
      setChildren(children - 1)
    }
  }

  const infantsAdd = () => {
    setInfants(infants + 1)
  }

  const infantsLess = () => {
    if (infants <= 0) {
      return
    }
    else {
      setInfants(infants - 1)
    }
  }



  const placesArray = [
    {
      id: "1",
      place: "london"
    },
    {
      id: "2",
      place: "russia"
    },
    {
      id: "3",
      place: "spain"
    },
    {
      id: "4",
      place: "brazil"
    },
    {
      id: "5",
      place: "india"
    },
    {
      id: "6",
      place: "france"
    },

    {
      id: "9",
      place: "italy"
    },
    {
      id: "10",
      place: "australia"
    },
    {
      id: "11",
      place: "canada"
    },
    {
      id: "12",
      place: "spain"
    },
    {
      id: "13",
      place: "usa"
    },
    {
      id: "14",
      place: "kyiv"
    },
    {
      id: "15",
      place: "ukraine"
    },
    {
      id: "16",
      place: "newyork"
    },
    {
      id: "17",
      place: "europe"
    },

  ]


  return (


    <div>
      <nav className=" bg-white w-full navBar flex relative justify-between items-center mx-auto px-8 h-20">
        {/* logo */}
        <div className="inline-flex">
          <Link className="_o6689fn" to={"/"}>
            <div className="hidden md:block">
              <svg width={102} height={32} fill="red" style={{ display: 'block' }}>
                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z" />
              </svg>
            </div>
            <div className="block md:hidden">
              <svg width={30} height={32} fill="red" style={{ display: 'block' }}>
                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">



              <label htmlFor='my-modal-4' className='navbarAnyHold flex inpWidth2 cursor-pointer'>
                <p className=' inline-block'> Anywhere <p className=' inline-block ml-1'> | </p> </p>
                <p className=' inline-block'> Any Week <p className=' inline-block ml-1'> | </p> </p>
                <p className=' text-gray-400 whitespace-nowrap '> Add guests <AiOutlineSearch className=' whitespace-nowrap inline-block' /> </p>
              </label>


              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <input placeholder="Search For Your Destanation" onChange={inputValueHandler} onClick={() => setToggle(!toggle)} value={inputValue} type="text" className="flex outline-none items-center flex-grow-0 flex-shrink pl-2 relative inputBox  border  px-1  py-1" />





                  <div className='searchTabsHold relative flex top-28 right-1'>
                    <Tabs variant='soft-rounded' colorScheme='red'>
                      <TabList>
                        <Tab>PLACE</Tab>
                        <Tab>DATES</Tab>
                        <Tab>GUESTS</Tab>
                      </TabList>


                      <TabPanels>

                        <TabPanel>

                          <div className='absolute z-50 tabContentPlaces'>
                            {inputValue === "" ? <> <div className='tabContent1Hold cursor-pointer'>
                              <Link to={`/location/usa`}>
                                <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' className='tabContent1Image' />
                              </Link>
                              <Link to={`/location/europe`}>
                                <img src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' className='tabContent1Image' />
                              </Link>

                              <Link to={`/location/london`}>
                                <img src='https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320' className='tabContent1Image' />
                              </Link>

                            </div>

                              <div className='secImages'>
                                <Link to={`/location/canada`}>
                                  <img src='https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320' className='tabContent1Image' />
                                </Link>
                                <Link to={`/location/italy`}>
                                  <img src='https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320' className='tabContent1Image mr-1' />
                                </Link>
                                <Link to={`/location/kyiv`}>
                                  <img src='https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320' className='tabContent1Image' />
                                </Link>
                              </div>

                              <div className='secText flex  top-24 relative left-16'>
                                <p className='fs'> SouthEast Asia </p>
                                <p className='fs'> Indonesia </p>
                                <p className='fs'> MiddleEast </p>
                              </div>


                              <div className='imgCaptionHold flex flex-wrap'>
                                <p className='fs'> I'm flexible  </p>
                                <p className='fs'> Europe</p>
                                <p className='fs'> United Kingdom </p>

                              </div>  </> : <>
                              <div className='serachResultsHold'>
                                <p className=' fof text-xl text-center mt-3'> MOST TRAVELLED PLACES </p>
                                <div className=' flex flex-row flex-wrap searchDisplayParent'>
                                  {placesArray.filter((item) => {

                                    if (inputValue === "") {
                                      return ""
                                    }
                                    else if (item.place.toLocaleLowerCase().includes(inputValue)) {
                                      return item
                                    }
                                  }).map((item) => {
                                    return (
                                      <div className='searcdisplayIndivitual'>
                                        <div>
                                          <Link to={`/location/${linkClickedVlaue}`}>
                                            <IoLocationOutline className=' inline-block mb-2 text-2xl' />
                                            <p onMouseOver={(e) => setLinkClickedValue(e.target.innerText)} className="capitalize fof inline-block">  {item.place} </p>
                                          </Link>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            </>}


                          </div>



                        </TabPanel>
                        <TabPanel>
                          <CalendarNavBar />
                        </TabPanel>

                        <TabPanel>
                          <div className='tab3MainHold flex flex-col'>
                            <div className='adultsKidsHold flex-col flex text-lg font-medium fof'>
                              <p> Adults  </p>
                              <p>Children</p>
                              <p>Infants  </p>
                              <p> Pets </p>
                            </div>

                            <div className='adultCriteriaHold flex flex-col relative'>
                              <p className=' text-gray-400'> Ages 13 or above </p>
                              <p className=' text-gray-400'> Ages 2-12 </p>
                              <p className=' text-gray-400'> Under 2 </p>
                              <p className=' text-gray-400'> Select pet friendly </p>
                            </div>


                            <div className='divideLineHold flex flex-col'>
                              <p className='navLine'>  </p>
                              <p className='navLine'>  </p>
                              <p className='navLine'>  </p>
                            </div>

                            <div className='btnControlsPlus flex flex-col relative'>
                              <AiOutlinePlusCircle className='fss' onClick={increaeHandler} />
                              <AiOutlinePlusCircle className='fss' onClick={childrenAdd} />
                              <AiOutlinePlusCircle className='fss' onClick={infantsAdd} />
                            </div>

                            <div className='btnControlMinus flex flex-col relative cursor-pointer' id='btnmin'>
                              <AiOutlineMinusCircle className='fss' onClick={decreaseHandler} />
                              <AiOutlineMinusCircle className='fss' onClick={childrenLess} />
                              <AiOutlineMinusCircle className='fss' onClick={infantsLess} />

                            </div>

                            <div className='navQtyHold relative'>
                              <p className=' w-3'> {adultsQuantity} </p>
                              <p className=' w-3'> {children}</p>
                              <p className=' w-3'>{infants} </p>
                            </div>


                            <div className='selectWrapper'>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className="outline-none"
                              />
                            </div>



                          </div>
                        </TabPanel>

                      </TabPanels>
                    </Tabs>

                  </div>

                </label>
              </label>

            </div>
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
              </div>
              <div className="block relative">
                <button type="button" className="inline-block py-2 hover:bg-gray-200 rounded-full relative ">
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /></svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="block">
              <div className="inline relative">
                {<button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div className="pl-1 googleAuthBtnHold w-10">
                    <LoginSocialGoogle
                      client_id={`${process.env.REACT_APP_AUTH_CLIENT}.apps.googleusercontent.com`}
                      scope="openid profile email"
                      discoveryDocs="claims_supported"
                      access_type="offline"
                      onResolve={({ provider, data }) => {
                        (data.email_verified === true ? setUserImage(data.picture) : setVerified(false));

                      }}
                      onReject={(err) => {
                        console.log(err)
                      }}
                    >
                      <GoogleButton type='dark' label='' className='googleAuthBtn' />
                    </LoginSocialGoogle>
                  </div>
                  {userimage.length > 2 ? <img src={userimage} className="UserLoginImage ml-5" /> : <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </svg>
                  </div>}

                </button>}

              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav >

    </div >
  )
}

export default Home
