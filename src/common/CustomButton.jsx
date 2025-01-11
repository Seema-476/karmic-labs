import React from 'react'

const CustomButton = ({text, classStyle,svg, customOnClick}) => {
  return (
    <button onClick={customOnClick} className={`font-sunflower font-bold md:text-base text-sm md:leading-5 text-z-black md:py-3 md:px-8 py-2 px-6 rounded-[82px] border border-white duration-700 ${classStyle}`}>{text} { svg}</button>
  )
}

export default CustomButton