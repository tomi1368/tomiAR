import React, { useState,useContext } from "react";
import ThemeContext from "../../context/theme-Context";
import "./Contact.scss"

const Contact = () => {
  const {theme} = useContext(ThemeContext)
  const [open,setOpen] = useState(false)
  console.log(theme)
  return (
    <>
      <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center", padding: "5rem 0 5rem 0", backgroundColor:`${theme === "light" ? "#fdfaf9" :  "#0e0d0e"  }`}}>
        <h2 style={{textAlign:"center"}}>Let´s connect</h2>
        <button onClick={()=>setOpen(true)} style={{padding:"10px 15px",backgroundColor:"#f5d245",border:"none",fontWeight:"600",cursor:"pointer"}}>Contact Me</button>
        </div>
      {open && (
        <div className="backdrop">
          <div className="links-container" style={{backgroundColor:`${theme === "light" ? "#0f0e0f": "#f0f8ff"}`}}  >
            <button style={{color:`${theme === "light" ? "#fdfaf9" : "#0e0d0e" }`}} className="links-container__close"onClick={()=>setOpen(false)} >X</button>
            <ul>
              <li style={{marginBottom:"10px"}}>
              <img style={{width:"20px",height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="" /> <a  style={{color:`${theme === "light" ? "#fdfaf9" : "#0e0d0e" }`}} href="https://wa.me/541151756795" target="_blank">Let´s chat</a>
              </li>
              <li>
              <img style={{width:"20px",height:"20px"}} src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" /> <a style={{color:`${theme === "light" ? "#fdfaf9" : "#0e0d0e" }`}}>
                    tomirodriguez1368@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
