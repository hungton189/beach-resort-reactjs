import React from 'react'
import Hero from "../Components/Hero/index"
import Banner from "../Components/Banner/index"
import {Link} from "react-router-dom"

const Rooms = () => {
    return (
        <div style={{marginTop:"80px"}}>
            <Hero page="rooms">
                <Banner 
                        title="our rooms"
                    >
                    <Link to="/" className="btn-primary">return home</Link>
                    </Banner>
            </Hero>
        </div>
    )
}
export default Rooms;
