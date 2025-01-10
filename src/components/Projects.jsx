import React from 'react';
import Heading from '../common/Heading';
import { UPCOMING_PROJECTS } from '../utils/helper';
import CustomButton from '../common/CustomButton';

const Projects = () => {
    return (
        <div className="lg:pt-24 md:pt-20 pt-16 lg:pb-[68px] pb-16 duration-700" id='down'>
            <div className="container relative">
                <div className="absolute xl:top-[-4%] top-[-1%] lg:left-[33%] md:left-[28%] left-[15%] lg:block hidden">
                    <img
                        src="/assets/images/svg/heading-line.svg"
                        alt="heading-line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <Heading
                    text={'Upcoming Projects'}
                    classStyle={'lg:!pb-12 md:!pb-10 !pb-8'}
                />
                <div className="flex m ax-lg:flex-wrap flex-wrap flex-row justify-center -mx-3">
                    {UPCOMING_PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="xl:w-[25%] sm:w-[50%] w-full xl:px-[14.5px] px-3 mb-6"
                        >
                            <div className='p-4 border backdrop-blur-[10px] bg-white/10 rounded-xl border-dusk-black xl:max-w-[263px] w-full'>
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
                    <CustomButton text="View All" classStyle="font-light font-medium bg-transparent !text-white border border-white hover:!text-z-black hover:bg-white transition-all duration-500" classDesign={'hidden'}/>
               </div>
            </div>
        </div>
    );
};

export default Projects;