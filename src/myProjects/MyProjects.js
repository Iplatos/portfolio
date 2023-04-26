import React from 'react';
import style from "./MyProjects.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import MyProject from "../myProject/MyProject";
import Title from "../common/Components/Title/Title";
import todoImage from "./../assets/image/cards.jpg"
import Cards from "./../assets/image/cards.jpg"
import Zoom from 'react-reveal/Zoom';


const MyProjects = () => {
    const social = {
        backgroundImage: `url(${todoImage})`,

    }
    const todos = {
        backgroundImage:  `url(${Cards})`,
    }

    return (
        <div id="Projects" className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjects}  `}>
               <Title text = {"My Projects"}/>
                <div className={style.projects}>
                    <Zoom><MyProject title={"Todo list"} style={social}
                                  discription={"SPA for managing to-do lists and their items."}/></Zoom>
                    <Zoom><MyProject title={"Cards"} style={todos} link={"https://artyomsamsonchik.github.io/friday-project/#/login"}
                                  discription={"SPA for learning by cards."}/></Zoom>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;