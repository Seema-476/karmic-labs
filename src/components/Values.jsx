import React from 'react'
import { VALUES_CARDS } from '../utils/helper'
import Heading from '../common/Heading'

const Values = () => {
    return (
        <div className='lg:pt-[78px] md:pt-16 pt-12 pb-6 sm:pb-[50px]'>
            <div className='container'>
                    <Heading text={'Values'} />
                    <img src="/assets/images/svg/heading-line.svg" alt="heading-line" className='mx-auto lg:max-w-[344px] sm:max-w-[242px] max-w-[210px] lg:-translate-y-20 sm:-translate-y-14 -translate-y-12' />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[69px] md:pt-14 pt-9 lg:-mt-20 sm:-mt-14 -mt-12 max-lg:!justify-center'>
                    {VALUES_CARDS.map((values, index) => (
                        <div key={index} className='lg:w-[33.33%] md:w-[50%] w-full relative group px-2 lg:mb-0 md:mb-6 mb-5'>
                            <div className='absolute -top-[18px] xl:-right-4 -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={values.circle} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16 shadow-custom-2xl' />
                            </div>
                            <div className="xl:max-w-[369px] lg:min-h-[294px] md:min-h-[270px] min-h-[210px] rounded-xl border border-dusk-black xl:p-[19.5px] p-4 hover:bg-dusk-black hover:backdrop-blur-lg">
                                {values.cardSvgIcon}
                                <h3 className="font-bold text-xl leading-custom-4xl text-white py-[10px]">
                                    {values.title}
                                </h3>
                                <p className="font-normal text-base text-white xl:max-w-[329px]">
                                    {values.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
</div>
    )
}

export default Values