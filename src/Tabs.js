import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
//border-bottom : none;

import "../src/styles/Tabs.css"
import Tab1 from './components/Tab1'
import Tab2 from "./components/Tab2"
import Tab3 from "./components/Tab3"
import Tab4 from "./components/Tab4"
import Tab5 from "./components/Tab5"
import Tab6 from "./components/Tab6"
import Tab7 from "./components/Tab7"
import Tab8 from "./components/Tab8"
import Tab9 from "./components/Tab9"
import Tab10 from "./components/Tab10"

const TabsComp = ({ toggle, setToggle }) => {




  return (
    <>

      <Tabs>
        <TabList className="placeTabs-hold">
          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' alt='hey' />
            </div>

          </Tab>

        </TabList>



        <TabPanels>
          <TabPanel className="tab-content"> <Tab1 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab2 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab10 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab4 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab5 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab6 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab7 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab8 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab9 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab3 pushDown={toggle} />  </TabPanel>
        </TabPanels>

      </Tabs >

    </>
  )
}

export default TabsComp
//         <TabList className={toggle === true? "tabs-hold-pushDown" : "tabs-hold"}>

