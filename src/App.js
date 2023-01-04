import './App.css';
import Header from "./header/Header"
import Rotate from 'react-reveal/Rotate';
import React from "react";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import AboutWork from "./aboutWork/AboutWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Flip from 'react-reveal/Flip';
function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Main/>

            <Skills/>
            <MyProjects/>
            <AboutWork/>
            <Contacts/>
          <Footer/>

        </div>
    );
}

export default App;
