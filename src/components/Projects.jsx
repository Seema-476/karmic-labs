import React from 'react'
import Heading from '../common/Heading';
import { PROJECTS_IMAGES } from '../utils/helper'
import CustomButton from '../common/CustomButton';
import Description from '../common/Description';

const Projects = () => {
    return (
        <div className='lg:bg-hero-bg-set bg-center bg-cover bg-no-repeat bg-projects-bg-white-layer xl:h-[902px] pt-28 sm:pt-[78px] xl:pb-[160px] lg:pb-20 md:pb-[70px] sm:pb-[75px] pb-28 max-sm:-mb-16 -mt-2' id='projects'>
            <div className='container relative'>
                <img src="/assets/images/svg/heading-black-line.svg" alt="services-line"
                    className='lg:max-w-[390px] md:max-w-[220px] sm:max-w-[210px] max-w-[190px] mx-auto pointer-events-none lg:-mb-[79px] -mb-11' />
                <Heading
                    text={'Projects'}
                    classStyle={'!pb-5 text-center !text-z-black z-10 -mt-8'} />
                <Description text={'Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.'}
                classStyle={'text-z-black max-w-[532px] text-center mx-auto'}/>
                <div className='flex flex-wrap pt-[29px] max-md:pt-4 justify-center'>
                    {PROJECTS_IMAGES.map((obj, i) => (
                        <div
                            key={i}
                            className={`w-3/12 flex max-lg:w-4/12 max-md:w-6/12 max-sm:w-full px-2 pt-6`}
                        >
                            <div
                                className={`max-w-[273px] mx-auto hover:scale-125 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center  ${i === 0 ? 'bg-sky-blue' : ''
                                    }`}
                            >
                                <img
                                    className=" w-full rounded-lg !max-w-[273px] min-h-[174px] pointer-events-none"
                                    src={obj.image}
                                    alt='projects-image'
                                />
                                <div className='absolute min-h-[47px] flex justify-center items-center shadow-shadow-2xl bg-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]'>
                                    <p className='text-white text-base leading-5 sm:text-xl sm:leading-custom-2xl font-bold'>
                                        {obj.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mx-auto lg:pt-14 pt-8'>
                    <CustomButton text="View All" classStyle="font-medium bg-transparent !py-[11.3px] !text-z-black border border-z-black hover:!text-white hover:bg-z-black hover:border-transparent" classDesign={'hidden'} />
                </div>
            </div>
        </div>
    )
}

export default Projects