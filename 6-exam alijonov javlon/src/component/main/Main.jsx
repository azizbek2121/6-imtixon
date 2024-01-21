import React from 'react'
import HeaderTop from '../header-center/Header-top'
import Navbar from '../header/Navbar'
import './Main.scss'


const Main = () => {
  return (
    <div className='main'>
        <Navbar/>
        <HeaderTop/>
    </div>
  )
}

export default Main