import React from 'react'

const CustomButton = ({text, classStyle}) => {
  return (
    <button className={`font-sunflower font-bold md:text-base text-sm md:leading-5 text-Z-black md:py-3 md:px-8 py-2 px-6 rounded-[82px] scale-95 duration-700 ${classStyle}`}>{ text}</button>
  )
}

export default CustomButton