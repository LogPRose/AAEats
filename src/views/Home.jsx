import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Reccomendations from '../components/Reccomendations'

function Home() {
    return (
        <div>
            <Navbar/>
            <Map/>
            <Recommendations/>
            <Footer/>
        </div>
    )
}


export default Home
