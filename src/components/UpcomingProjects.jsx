import React from 'react';
import Heading from '../common/Heading';
import { UPCOMING_PROJECTS } from '../utils/helper';
import CustomButton from '../common/CustomButton';

const UpcomingProjects = () => {
    return (
        <div className="lg:pt-[76px] sm:py-16 pt-12 lg:pb-[68px] sm:pb-12 pb-8 duration-700 -mt-4" id='down'>
            <div className="container">
                <img src="/assets/images/svg/heading-line.svg" alt="heading-line"
                    className='mx-auto relative -z-10 lg:max-w-[380px] sm:max-w-[253px] max-w-[210px] lg:-mb-[76px] sm:-mb-12 -mb-11' />
                    <Heading
                        text={'Upcoming Projects'}
                        classStyle={'lg:!pb-12 md:!pb-10 !pb-8'} />
                <div className="flex flex-wrap flex-row justify-center -mx-3 ">
                    {UPCOMING_PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-full xl:px-[14.5px] px-3">
                            <div className='xl:p-4 p-3 border backdrop-blur-[10px] bg-white/10 rounded-xl lg:mb-0 mb-5 border-dusk-black mx-auto max-w-[263px] w-full'>
                                <div className='pb-4'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full pointer-events-none"
                                    />
                               </div>
                                <div className="flex justify-between">
                                    <p className="font-sunflower font-medium lg:text-xl text-base lg:leading-custom-3xl text-white">
                                        {project.title}
                                    </p>
                                    <p className="font-sunflower font-bold lg:text-base text-sm lg:leading-custom-xl text-white">
                                        {project.time}
                                    </p>
                                </div>
                                <p className="font-light text-base leading-custom-5xl text-white">
                                    {project.category}
                                </p>
                           </div>
                        </div>
                    ))}
                </div>
                <div className='text-center lg:pt-12 md:pt-7 pt-4'>
                    <CustomButton text="View All" classStyle="font-medium bg-transparent !py-[11.4px] !text-white border border-white hover:!text-z-black hover:bg-white" classDesign={'hidden'}/>
               </div>
            </div>
        </div>
    );
};

export default UpcomingProjects;