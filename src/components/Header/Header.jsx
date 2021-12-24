import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../context/theme-Context'
import { motion } from 'framer-motion'
import "./Header.scss"


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
const Header = () => {
    const {theme} = useContext(ThemeContext)

    let style = theme === "light" ? "" : "dark"

    return (
        <motion.header variants={container} initial="hidden" animate="visible" className="container header">
            <motion.h1 variants={item}>Hello <span className={`header-emoji ${style}`}>&#128400;</span>, I´m Tomas Rodriguez. I´am a self-taught Front-End Developer with a knowledge about JS Backend</motion.h1>
            <NavLink className={`header-about ${style}`} to="/about">
                <motion.li style={{color:`${theme === "light" ? "#f7cf2e" : "#ffedb2"}`,fontWeight:"600" }} variants={item}>
                Know More About Me ➝
                </motion.li>
            </NavLink>
        </motion.header>
    )
}

export default Header
