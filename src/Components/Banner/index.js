import React from 'react'
import "./index.css"

const Banner = ({title,subTitle,children}) => {
    return (
        <div className="banner">
            <h1 className="title">{title}</h1>
            <div></div>
            <p className="subtitle">{subTitle}</p>
            {children}
        </div>
    )
}
export default Banner