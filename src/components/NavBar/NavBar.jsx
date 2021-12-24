import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  LightMode,
  DarkMode,
  GitHub,
  LinkedIn,
  InsertDriveFile,
} from "@mui/icons-material/";
import ThemeContext from "../../context/theme-Context";
import "./NavBar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  const {theme,chgTheme} = useContext(ThemeContext) //useContext recibe el contexto que quiera
  
  let style = theme === "light" ? "" : "dark"
  
  const container = {
    hidden: {opacity: 0,y:20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:3,
            ease:"easeOut",
            delay:2
        }
    }
}

  return (
    <motion.nav variants={container} initial="hidden" animate="visible" className="navbar">
      <div className="container navbar-content">
        <div>
          <NavLink exact="true" to="/">
            <h2 className={`navbar-content__brand ${style}`}>TR</h2>
          </NavLink>
        </div>
          <ul className="navbar-content__links">
            <li className={`navbar-content__links__link ${style}`} onClick={()=>chgTheme()}>{theme==="dark" ? <LightMode /> : <DarkMode />}</li>
            <li>
              <a className={`navbar-content__links__link ${style}`} href={"https://github.com/tomi1368"} rel="noopener" target="_blank">
                <GitHub></GitHub>
              </a>
            </li>
            <li>
              <a className={`navbar-content__links__link ${style}`} href={"https://www.linkedin.com/in/tomas-agustin-rodriguez/"} rel="noopener" target="_blank">
                <LinkedIn></LinkedIn>
              </a>
            </li>
            <li>
              <a className={`navbar-content__links__link ${style}`} href={"https://drive.google.com/uc?export=download&id=1sDGGeBJb4mS-nPG-gVWrroAD6arSinyX"} rel="noopener" target="_blank">
                <InsertDriveFile></InsertDriveFile>
              </a>
            </li>
          </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
