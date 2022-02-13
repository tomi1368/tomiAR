import React, { useContext } from 'react'
import cardsContent from './mocks/cards-content'
import Project from './presentational/Project/Project'
import ThemeContext from '../../context/theme-Context'
import { motion } from 'framer-motion'
import "./Projects.scss"

const container = {
    hidden: {opacity: 0,y:20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:3,
            ease:"easeOut"
        }
    }
}

const Projects = () => {
    const {theme} = useContext(ThemeContext)

    let style = theme === "light" ? "" : "dark"


    return (
        <motion.section variants={container} initial="hidden" animate="visible" className="container projects">
            {cardsContent.map((card,i)=><Project key={i} url={card.url} index={i} props={card}></Project>)}
            <div className="projects-span">
            <span className={`projects-span__line ${style}`}></span><span className={`projects-span__text ${style}`}>WORK</span>
            </div>
        </motion.section>
    )
}

export default Projects
