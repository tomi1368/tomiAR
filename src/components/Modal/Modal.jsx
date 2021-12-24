import React,{useContext} from 'react'
import "./Modal.scss"
import { motion} from "framer-motion";
import ThemeContext from '../../context/theme-Context';


const Modal = () => {
    const {theme} = useContext(ThemeContext)
    let style = theme === "light" ? "" : "dark";
    return (
        <motion.div
        initial={{height:"100vh"}}
        animate={{height:"0px"}}
        exit={{height:"100vh"}}
        transition={{duration:1.4,ease:"easeOut",}}
        className={`modal`}
        style={{backgroundColor:`${theme === "light" ? "#0f0e0f" : "#fdfaf9" }`}}
        >
        
        </motion.div>
    )
}

export default Modal
