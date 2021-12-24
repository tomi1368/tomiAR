import React from 'react'
import { motion } from 'framer-motion'

import HTML5 from "/src/public/HTML5.png"
import CSS3 from "/src/public/CSS3.png"
import JS from "/src/public/JS.png"
import SASS from "/src/public/SASS.png"
import BT5 from "/src/public/Bootstrap5.png"
import NODEJS from "/src/public/NodeJS.png"
import MONGODB from "/src/public/MongoDB.png"
import REACTJS from "/src/public/ReactJS.png"
import REDUX from "/src/public/Redux.png"
import GIT from "/src/public/GIT.png"
import "./Skill.scss"


let tech = [HTML5,CSS3,JS,SASS,BT5,NODEJS,MONGODB,REACTJS,REDUX,GIT]




const skillVariant = {
    hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}


const Skill = ({data,index}) => {
    return (

        <motion.div className='skill' variants={skillVariant}>
            <motion.img className='skill-img' src={tech[index]} alt={data.nombre} />
            <motion.h2>{data.nombre}</motion.h2>
        </motion.div>
    )
}

export default Skill
