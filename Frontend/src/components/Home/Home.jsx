import React from 'react'
import Hero from '../Hero/Hero'
import SculptText from '../SculptureShop/SculptText'
import SculptureShop from '../SculptureShop/SculptureShop'
import PaintText from '../PaintingShop/PaintText'
import NewArrival from '../NewArrival/NewArrival'
import SliderNav from '../Slider/SliderNav'
import SliderProduct from '../Slider/SliderProduct'
import ProductCarousel from '../Product/ProductSection'
import CustomSection from '../CustomProduct/CustomSection'
import PaintingShop from '../PaintingShop/PaintingShop'
import ProductSection from '../Product/ProductSection'

const Home = () => {
  return (
    <div>
      <Hero/>
    <SculptText/>
    <SculptureShop/>
    <PaintText/>
    <PaintingShop/>
    <NewArrival/>
    {/* <SliderNav/>
    <SliderProduct/> */}
    {/* <ProductSection/>
    <ProductCarousel/> */}
    <CustomSection/>
      
    </div>
  )
}

export default Home
