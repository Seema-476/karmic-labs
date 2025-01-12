import React from 'react'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import { BtnArrow, DownArrow } from '../utils/icons'

const Hero = () => {
  return (
    <div className='lg:bg-hero-bg-layer bg-no-repeat max-lg:bg-center lg:min-h-[726px] bg-hero-bg-set relative max-lg:bg-light-gray lg:pb-0 sm:pb-8 pb-6' id='home'>
      <div className='container'>
        <div className='lg:flex-row flex-col flex justify-between lg:pt-[124px] md:pt-20 pt-12 gap-5'>
          <div className='lg:w-[570px] w-full flex flex-col justify-center'>
            <div className='flex flex-col justify-center max-lg:items-center'>
              <h1 className='lg:text-custom-2xl font-light sm:text-5xl text-4xl lg:leading-custom-7xl text-white uppercase lg:max-w-[570px] max-lg:text-center font-sunflower lg:pt-2'>We are believers decentralization
                <img className='lg:ms-[160px] md:ms-[343px] sm:ms-[285px] ms-[155px] lg:max-w-[158px] sm:max-w-[125px] max-w-24 w-full pointer-events-none -my-1 max-sm:hidden' src="/assets/images/svg/main-heading-bottom-line.svg" alt="second-line" /> And Web3.
                <img className='lg:ms-[132px] md:ms-[343px] sm:ms-[285px] ms-[155px] lg:max-w-[179px] sm:max-w-[125px] max-w-24 w-full pointer-events-none -my-3 max-sm:hidden' src="/assets/images/svg/main-heading-top-line.svg" alt="first-line" />
              </h1>
              <Description classStyle='lg:max-w-[495px] pt-7 max-lg:text-center sm:!leading-custom-5xl' text='Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac.' />
              <div className='flex sm:pt-10 pt-5 sm:gap-8 gap-5 lg:-mb-2'>
                <CustomButton classStyle="started-btn !px-6 bg-white flex items-center gap-[10px] border border-white hover:text-white hover:bg-transparent group" text="Get Started" svg={<BtnArrow arrowClass={'group-hover:!fill-white duration-700'}/>} />
                <CustomButton text="Read More" classStyle="font-light bg-transparent !text-white border border-white hover:!text-z-black hover:bg-white" classDesign={'hidden'} />
              </div>

            </div>
          </div>
          <div className='lg:w-[398px] w-full flex max-lg:justify-center max-lg:items-center'>
            <img className='max-w-[398px] w-full pointer-events-none' src="/assets/images/webp/hero-main-image.webp" alt="hero-main-image" />
          </div>
          <a href='#down' className='absolute bottom-[70px] 2xl:bottom-[75px] left-[50%] lg:block hidden'>
            <DownArrow />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero