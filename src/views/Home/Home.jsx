import React from 'react'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/footer/Footer';
import NavbarMain from '../../components/Navbar/NavbarMain';
import Carousel1 from '../../components/Carousel/Carousel'

function Home() {
  return (
 <> 
 <NavbarMain/>
 <Hero />
 <Carousel1/>
 <Footer/>
 </>

  )
}

export default Home