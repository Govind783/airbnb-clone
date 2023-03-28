import React from 'react'
import "../styles/Form.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Paypal from './Paypal'
import Card from './Card'

const PaymentForm = (props) => {

  let price = props.amount;
  let days = props.days;
  let placesName = props.place;

  return (
    <div>

      <div>

        <Tabs variant='soft-rounded' colorScheme='red' className='tabs-hold2'>

          <TabList>
            <Tab>Pay with PayPal</Tab>
            <Tab className=''>Pay with Card</Tab>
          </TabList>
          <TabPanels>


            <TabPanel>
              <Paypal initialPrice={price} nameOfPlace={placesName} daysSelected={days} />
              
            </TabPanel>


            <TabPanel>
              <Card initialPrice={price} nameOfPlace={placesName} daysSelected={days} />
            </TabPanel>


          </TabPanels>
        </Tabs>
      </div>


    </div>
  )
}

export default PaymentForm