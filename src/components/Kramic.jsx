import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { WHO_KARMIC_DATA } from '../utils/helper'

const Karmic = () => {
    return (
        <div className='lg:pb-[69px] md:py-20 max-sm:py-12 lg:pt-20 relative' id='about'>
            <div className='absolute size-[226px] rounded-full bg-white blur-[110px] -z-10 shadow-white top-[-117px] right-0 lg:block hidden'></div>
            <div className="container relative">
                <div>
                    <Heading
                        text={'Who is karmic?'}/>
                    <img src="/assets/images/svg/heading-line.svg" alt="heading-line" className='mx-auto lg:max-w-[398px] sm:max-w-[242px] max-w-[210px] lg:-translate-y-[85px] sm:-translate-y-14 -translate-y-12' />
                </div>
                <Description
                    classStyle={'mx-auto text-center pt-4 lg:-mt-[85px] sm:-mt-14 -mt-12'}
                    text={'We are builders, innovaters, and believers.'}/>
                <Description
                    classStyle={'max-w-[532px] mx-auto text-center'}
                    text={'We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.'}/>
                <div className="flex max-xl:flex-wrap pt-10 max-xl:justify-center items-center max-w-[1140px] mx-auto w-full gap-4">
                    {WHO_KARMIC_DATA.map((image, index) => (
                        <img
                            key={index}
                            className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] rounded-lg border border-border-white shadow-custom-3xl hover:border-transparent transition-all duration-500'
                            src={image.src}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Karmic