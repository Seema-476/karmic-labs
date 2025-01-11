import React from 'react'
import Heading from '../common/Heading';
import { PROJECTS_IMAGES } from '../utils/helper'
import CustomButton from '../common/CustomButton';
import Description from '../common/Description';

const Projects = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat bg-projects-bg-white-layer xl:h-[902px] pt-[150px] sm:pt-[99px] lg:pb-[160px] pb-32' id='projects'>
            <div className='container relative'>
                <div className="absolute lg:top-[-3%] xl:left-[35.5%] lg:left-[32%] left-[25%] md:top-[-1%] md:left-[36%] sm:left-[32%] sm:top-[-1%] -top-[7px]">
                    <img
                        src="/assets/images/svg/heading-black-line.svg"
                        alt="black-line"
                        className="lg:w-[344px] md:w-[200px] sm:w-[220px] w-[180px]"
                    />
                </div>
                <Heading
                    text={'Projects'}
                    classStyle={'lg:!pb-5 text-center !text-z-black z-10'} />
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
                                    className=" w-full rounded-lg !max-w-[273px] min-h-[179px]"
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
                <div className='text-center mx-auto pt-14'>
                    <CustomButton text="View All" classStyle="font-medium bg-transparent !text-z-black border border-z-black hover:!text-white hover:bg-z-black hover:border-transparent" classDesign={'hidden'} />
                </div>
            </div>
        </div>
    )
}

export default Projects