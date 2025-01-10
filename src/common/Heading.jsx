import React from 'react'

const Heading = ({ classStyle, text }) => {
    return (
        <h2 className={`${classStyle} font-sunflower uppercase font-light lg:text-custom-xl sm:text-4xl text-3xl lg:leading-custom-6xl text-center text-white`}>{text}</h2>
    )
}

export default Heading