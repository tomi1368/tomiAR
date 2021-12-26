import React, { useContext } from "react";
import { motion } from 'framer-motion'
import Modal from '../Modal/Modal'
import NavBar from "../NavBar/NavBar"
import ThemeContext from "../../context/theme-Context";
import Contact from "../Contact/Contact";

const container = {
    hidden: {opacity: 0,y:20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:3,
            delayChildren:1,
            staggerChildren:1
        }
    }
}

const item = {
    hidden:{y:20, opacity:0},
    visible:{
        y:0,
        opacity:1
    }
}




const About = () => {
    const {theme} = useContext(ThemeContext)

    let style = theme === "light"  ? "" : "dark"
    return (
        <>
        <Modal/>
        <NavBar/>
        <motion.header variants={container} style={{marginBottom:"5rem",textAlign:"justify",maxWidth:"600px",marginTop:"4rem",height:"auto"}} initial="hidden" animate="visible" className="container header">
            <motion.h2 variants={item} style={{textAlign:"center",fontSize:"30px"}}>About Me</motion.h2>
            <motion.p variants={item}>Hi My Name is Tomas Rodriguez, a <span style={{color:`${theme === "light" ? "#eac638": "#ffedb2" }`,textShadow:"1px 1px 1px #000" , fontWeight:"700"}}>FullStack Jr Developer based in MERN Stack</span>.
            I have a passion for creating FullStack Apps, always focusing on user experience. Understanding the user is essential for creating useful and effective aplications.
            If I´m in a team I enjoy using my skillset to help as much as I can. <span style={{color:`${theme === "light" ? "#eac638": "#ffedb2" }`,textShadow:"1px 1px 1px #000" , fontWeight:"700"}}>Solving problems and giving good ideas.</span> 
            </motion.p>
            <motion.p variants={item}>
                In my beginning I made websites for local shops using HTML/CSS/JS. In november 2021, I entered into a <span style={{color:`${theme === "light" ? "#eac638": "#ffedb2" }`,textShadow:"1px 1px 1px #000" , fontWeight:"700"}}>ReactJS Bootcamp</span>, learning about the real Front-End world in the meantime I reinforce my knowledge by learning from backend with <span style={{color:`${theme === "light" ? "#eac638": "#ffedb2" }`,textShadow:"1px 1px 1px #000", fontWeight:"600"}}>MongoDB and NodeJS</span>.
            </motion.p>
            <motion.p variants={item}>
            Meanwhile I've studying a Systems Engineering career
            </motion.p>
            <motion.p variants={item}>
                In my free time, I enjoy playing football, going to gym, and seeing FullStack Youtube videos.
            </motion.p>
        </motion.header>
        <Contact></Contact>
        </>
    )
}

export default About
