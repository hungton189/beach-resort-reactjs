import React from 'react'
import PropTypes from 'prop-types';
import "./index.css"

const Hero = ({page,children}) => {
    return (
        <div className={page}>
            {children}
        </div>
    )
}
export default Hero
