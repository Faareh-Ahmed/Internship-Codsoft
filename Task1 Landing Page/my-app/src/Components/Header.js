import React from 'react'
import HeaderImage2 from '../Images/HeaderPic2.jpg'
import Navbar from './Navbar'
export default function Header() {
   let HeaderStyle={
        width:'100%',
        height: '100vh'
    }
  return (
    <> 
    <Navbar/>
    <img src={HeaderImage2} className="img-fluid" style={HeaderStyle} alt="..."/>
    </>
  )
}
