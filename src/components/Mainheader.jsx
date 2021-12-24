import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Mainheader = () => {
    const location = useLocation()
    return (
       <>
       { location.pathname == '/' ? <Header/>  : <Navbar/>}
       </>
    )
}

export default Mainheader
