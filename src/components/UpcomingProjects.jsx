import React from 'react';
import Heading from '../common/Heading';
import { UPCOMING_PROJECTS } from '../utils/helper';
import CustomButton from '../common/CustomButton';

const UpcomingProjects = () => {
    return (
        <div className="lg:pt-24 md:pt-20 pt-16 lg:pb-[68px] pb-16 duration-700" id='down'>
            <div className="container relative">
                <div className="absolute xl:top-[-4%] lg:top-[-1%] md:-top-[1%] sm:top-[-2%] -top-2 sm:left-[32%] lg:left-[33%] md:left-[35%] left-[24%]">
                    <img
                        src="/assets/images/svg/heading-line.svg"
                        alt="heading-line"
                        className="lg:w-[344px] sm:w-[250px] w-[190px]"/>
                </div>
                <Heading
                    text={'Upcoming Projects'}
                    classStyle={'lg:!pb-12 md:!pb-10 !pb-8'}
                />
                <div className="flex m ax-lg:flex-wrap flex-wrap flex-row justify-center -mx-3">
                    {UPCOMING_PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="lg:w-[25%] sm:w-[50%] w-full xl:px-[14.5px] px-3 mb-6"
                        >
                            <div className='xl:p-4 p-3 border backdrop-blur-[10px] bg-white/10 rounded-xl border-dusk-black xl:max-w-[263px] w-full'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="pb-4 w-full"
                                />
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
                <div className='text-center lg:pt-12 pt-7'>
                    <CustomButton text="View All" classStyle="font-medium bg-transparent !text-white border border-white hover:!text-z-black hover:bg-white" classDesign={'hidden'}/>
               </div>
            </div>
        </div>
    );
};

export default UpcomingProjects;