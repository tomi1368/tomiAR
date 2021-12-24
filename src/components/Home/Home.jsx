import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Modal from "../Modal/Modal"
import SkillSet from "../SkillSet/SkillSet"
import React from 'react'
import Contact from "../Contact/Contact"

const Home = () => {
    return (
        <>
        <Modal/>
        <NavBar/>
        <Header />
        <Projects />
        <SkillSet/>
        <Contact></Contact>
        </>
    )
}

export default Home
