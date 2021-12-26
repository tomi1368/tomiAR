import React, { useContext } from "react";
import "./Project.scss";
import Tag from "./Tag/Tag";
import ThemeContext from "../../../../context/theme-Context";

const Project = ({props,index}) => {
  const {theme} = useContext(ThemeContext)
  
  let style = theme === "light" ? "" : "dark"

  
  let links = ["https://wiki-rickandmorty.netlify.app/", "https://tommern-crud.netlify.app/","https://tomi1368.github.io/reduxcrud2.github.io/","https://tomi1368.github.io/automarket.github.io/"]
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
        <a href={links[index]} style={{textDecoration:"underline", textDecorationColor:`${theme === "light" ? "#fdfaf9" : "#0f0e0f" }` ,color:`${theme === "light" ? "#fdfaf9" : "#0f0e0f" }`}} target="_blank" >Visit Link → </a>
      </div>
      <div className="project-card__img">
        <img src={props.img} alt="img project" />
      </div>
    </div>
  );
};

export default Project;
