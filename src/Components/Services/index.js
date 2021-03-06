import React from 'react'
import "./index.css";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import ServicesItem from "../Service-item/index"
const services = [
    {
        icon:<FaCocktail className="service-icon"/>,
        title:"free Cocktail",
        info:"lorem ipsum dolor sit amet, consectetur adip lorem"
    },
    {
        icon:<FaHiking className="service-icon"/>,
        title:"endless hiking",
        info:"lorem ipsum dolor sit amet, consectetur adip lorem"
    },
    {
        icon:<FaShuttleVan className="service-icon"/>,
        title:"free shuttle",
        info:"lorem ipsum dolor sit amet, consectetur adip lorem"
    },
    {
        icon:<FaBeer className="service-icon"/>,
        title:"strongest beer",
        info:"lorem ipsum dolor sit amet, consectetur adip lorem"
    }
]
const Services = () => {
    return (
        <div className="services">
            <h1 className="title">Services</h1>
            <div className="underlined"></div>
            <div className="services-content">
                {
                    services.map((service,index) => {
                        return <ServicesItem service={service} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default Services
