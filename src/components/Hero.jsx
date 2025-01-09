import React from 'react'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import { DownArrow } from '../utils/icons'

const Hero = () => {
  return (
    <div className='lg:bg-hero-bg-layer bg-no-repeat max-lg:bg-center bg-cover lg:min-h-[746px] relative max-lg:bg-light-gray' id='home'>
      <div className='container'>
        <div className='lg:flex-row flex-col flex justify-between lg:pt-[173px] md:pt-20 pt-12 gap-5'>
          <div className='lg:w-[570px] w-full flex flex-col justify-center'>
            <div className='flex flex-col justify-center max-lg:items-center'>
              <h1 className='lg:text-custom-2xl sm:text-5xl text-4xl lg:leading-custom-7xl text-white uppercase lg:max-w-[570px] max-lg:text-center font-sunflower'>We are believers decentralization <img className='ms-[142px] max-w-[158px] w-full lg:block hidden' src="/assets/images/svg/main-heading-bottom-line.svg" alt="second-line" /> And Web3.
                <img className='ms-[111px] max-w-[169px] w-full lg:block hidden' src="/assets/images/svg/main-heading-top-line.svg" alt="first-line" />
              </h1>
              <Description classStyle='lg:max-w-[495px] pt-1 max-lg:text-center' text='Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac.' />
              <div className='flex  sm:pt-10 pt-5 sm:gap-8 gap-5'>
                <CustomButton classStyle="!py-[9.2px] !px-6 bg-white flex items-center gap-[10px] border border-white hover:text-white hover:bg-transparent transition-all duration-500" text="Get Started" customClass="!block fill-black group-hover:translate-x-0.5 transition-all duration-500" />
                <CustomButton text="Read More" classStyle="!py-[9.2px] !px-[31px] font-light bg-transparent !text-white border border-white hover:!text-black hover:bg-white transition-all duration-500" />
              </div>

            </div>
          </div>
          <div className='lg:w-[398px] w-full flex max-lg:justify-center max-lg:items-center'>
            <img className='max-w-[398px] w-full' src="/assets/images/webp/hero-main-image.webp" alt="hero-main-image" />
          </div>
          <div className='absolute bottom-[45px] left-[50%] lg:block hidden'>
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero