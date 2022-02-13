import React, { useContext } from "react";
import "./Project.scss";
import Tag from "./Tag/Tag";
import ThemeContext from "../../../../context/theme-Context";

const Project = ({props,url}) => {
  const {theme} = useContext(ThemeContext)
  
  let style = theme === "light" ? "" : "dark"

  return (
    <div className={`project-card ${style}`}>
      <div className="project-card__text">
        <span className={`project-card__text__net ${style}`}>{props.team}</span>
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
        <div className="project-card__text__tags">
          {props.tags.map((tag, i) => (
            <Tag key={i} title={tag}/>
          ))}
        </div>
        <a href={url} style={{textDecoration:"underline", textDecorationColor:`${theme === "light" ? "#fdfaf9" : "#0f0e0f" }` ,color:`${theme === "light" ? "#fdfaf9" : "#0f0e0f" }`}} target="_blank" >Visit Link → </a>
      </div>
      <div className="project-card__img">
        <img src={props.img} alt="img project" />
      </div>
    </div>
  );
};

export default Project;
