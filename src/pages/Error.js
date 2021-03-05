import React from 'react'
import Hero from "../Components/Hero/index"
import Banner from "../Components/Banner/index"
import {Link} from "react-router-dom"

const Error = () => {
    return (
        <div style={{marginTop:"80px"}}>
            <Hero page="home">
                <Banner 
                    title="404"
                    subTitle="page not found" 
                >
                <Link to="/" className="btn-primary">back to home</Link>
                </Banner>
            </Hero>
        </div>
    )
}
export default Error
