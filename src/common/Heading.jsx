import React from 'react'

const Heading = ({ classStyle, text }) => {
    return (
        <h2 className={`${classStyle} font-sunflower uppercase font-light text-custom-xl leading-custom-6xl text-center text-white`}>{text}</h2>
    )
}

export default Heading