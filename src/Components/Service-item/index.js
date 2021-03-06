import React from 'react'
import "./index.css"

const ServiceItem = ({service}) => {
    return (
        <div className="service-item">
            {service.icon}
            <h3 className="service-title">{service.title}</h3>
            <p className="service-info">{service.info}</p>    
        </div>
    )
}

export default ServiceItem
