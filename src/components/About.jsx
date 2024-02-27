import React from 'react'
import Tilt from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from '../styles'
import { services } from '../contansts'
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
    console.log(title);
    return (
      
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div  options={{
                    max:45,
                    scale:1,
                    speed:450


                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
                    <img src={icon} al
                    t={title} className="w-16 h-16 object-contain"/>
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
     
    )
}


const About = () => {
    console.log(services);
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[17px] text-secondary max-w-3xl leading-[30px]">
                I am a dedicated and experienced software developer with a strong background in frontend development. Over the years, I have honed my skills in various technologies, including React, Material-UI, Material Table, Three.js, and JavaScript. My passion lies in creating intuitive and visually appealing user interfaces that enhance the overall user experience.

                My expertise lies in building robust and scalable web applications using React, where I leverage the power of React components and state management to create dynamic and interactive user interfaces. I am well-versed in the Material-UI library, which allows me to craft beautiful designs with pre-built UI components and seamless theming options.

                In addition to React and Material-UI, I have extensive experience working with Material Table, a versatile and feature-rich data grid solution. I can efficiently handle data management and visualization, implementing advanced features such as sorting, filtering, pagination, and custom column rendering to provide a seamless user experience for handling large datasets.

                Furthermore, I have a solid understanding of Three.js, a JavaScript library that enables the creation of 3D graphics and animations in the browser. With Three.js, I can bring static web content to life by incorporating immersive 3D visuals, interactive experiences, and stunning visual effects.

                JavaScript is the backbone of my development journey, and I have deep knowledge of its core concepts and best practices. I am proficient in leveraging JavaScript libraries and frameworks to build dynamic and responsive web applications.

                Throughout my career, I have collaborated with cross-functional teams, including designers and backend developers, to deliver high-quality projects. I have excellent problem-solving skills, a meticulous attention to detail, and a strong focus on writing clean and maintainable code.

                As a frontend developer, I am continuously learning and staying up-to-date with the latest trends and advancements in the industry. I am excited about exploring new technologies and frameworks that can enhance the development process and deliver exceptional user experiences.

                If you are looking for a software developer who is skilled in React, Material-UI, Material Table, Three.js, JavaScript, and other frontend libraries, I would be thrilled to contribute my expertise to your projects. Let's collaborate and create outstanding web applications together!






            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
              

                
                {services.map((service, index) => {
                    return(

                        <ServiceCard key={service.title}
    
                            index={index} {...service} />
                    )
                    
                })}



            </div>
        </>
    )
}

export default SectionWrapper(About,"about");



