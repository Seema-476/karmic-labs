import React from 'react'

const CustomButton = ({text, classStyle,imgSrc,classDesign}) => {
  return (
    <button className={`font-sunflower font-bold md:text-base text-sm md:leading-5 text-z-black md:py-3 md:px-8 py-2 px-6 rounded-[82px] border border-white duration-700 ${classStyle}`}>{text} <img src={imgSrc} alt="arrow" className={`${classDesign}`} /></button>
  )
}

export default CustomButton