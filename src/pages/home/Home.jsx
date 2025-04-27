import React from 'react'
import Banner from '../../components/Banner'
import Catagories from './Catagories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurServices from './OurServices'
import New from './New'

const Home = () => {
  return (
    <div>
       <Banner/>
       {/* <Catagories/> */}
       <New/>
       <SpecialDishes/>
       <Testimonials/>
       <OurServices/>
    </div>
  )
}

export default Home