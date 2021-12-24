import React, { useEffect, useContext } from "react";
import Skill from "./presentational/Skill";
import skillSet from "./mocks/skillset";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../../context/theme-Context";


const sectionReveal = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
  hidden: { opacity: 0, x: 300 },
};

const SkillSet = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { theme } = useContext(ThemeContext);
  let style = theme === "light" ? "" : "dark";
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      animate={controls}
      className="container skill-grid"
    >
      {skillSet.map((el, i) => (
        <Skill key={i} data={el} index={i} ></Skill>
      ))}
      <motion.div className="projects-span">
        <motion.span className={`projects-span__line ${style}`}></motion.span>
        <motion.span className={`projects-span__text ${style}`}>
          SKILLSET
        </motion.span>
      </motion.div>
    </motion.section>
  );
};

export default SkillSet;
