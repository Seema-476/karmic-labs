import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_DATA } from '../utils/helper'

const Services = () => {
    return (
        <div className='pt-[68px] relative'>
            {/* <div className='absolute left-0 -bottom-[37%] -z-10 lg:block hidden'><img src="assets/images/svg/services-left-ellipse.svg" alt="services-left-ellipse" /></div> */}
            <div className='absolute right-0 -top-[37%] -z-10 lg:block hidden'><img src="assets/images/svg/services-right-ellipse.svg" alt="services-right-ellipse" /></div>
            <div className='container'>
                <div className='relative'>
                    <img src="/assets/images/svg/heading-line.svg" alt="services-line" className='xl:max-w-[344px] max-w-[347px] mx-auto absolute xl:left-[35%] left-[32%] xl:-bottom-3 -bottom-[9px] lg:block hidden'/>
                    <Heading text="Services" />
                </div>
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8'>
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[18px] xl:-right-1 -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={service.circle} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16 shadow-custom-2xl' />
                            </div>
                            <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-5 p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="size-10"
                                />
                                <h3 className="font-bold text-xl leading-custom-4xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {service.title}
                                </h3>
                                {service.description && (
                                    <p className="font-normal text-base text-white xl:max-w-[329px]">
                                        {service.description}
                                    </p>
                                )}
                                {service.content && service.content.length > 0 && (
                                    <div>
                                        {service.content.map((list, item) => (
                                            <div key={item} className='flex items-center '>
                                                <p className='size-1 bg-white rounded-full mx-2'></p>
                                                <a href='#' className='font-normal text-base text-white'>
                                                    {list.text || list.textTwo || list.textThree || list.textFour || list.textFive || list.textSix}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;