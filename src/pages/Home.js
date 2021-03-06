import React from 'react'
import Hero from "../Components/Hero/index"
import Banner from "../Components/Banner/index"
import {Link} from "react-router-dom"
import Services from "../Components/Services/index"

const Home = () => {
    return (
        <div style={{marginTop:"80px"}}>
            <Hero page="home">
                <Banner 
                    title="luxurious room"
                    subTitle="deluxe rooms starting at $299" 
                >
                <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
        </div>
    )
}
export default Home;
