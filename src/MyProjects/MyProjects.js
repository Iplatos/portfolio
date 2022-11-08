import React from 'react';
import style from "./MyProjects.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import MyProject from "../myProject/MyProject";
import Title from "../common/Components/Title/Title";
import todoImage from "./../assets/image/anthony-kiedis-suddeutsche-zeitung-magazine-im-with-you-red-hot-chili-peppers-rhcp-2011-image-001.jpg"
import todoSocial from "./../assets/image/71.jpg"


const MyProjects = () => {
    const social = {
        backgroundImage: `url(${todoImage})`,

    }
    const todos = {
        backgroundImage:  `url(${todoSocial})`,
    }
    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjects}  `}>
               <Title text = {"My Projects"}/>
                <div className={style.projects}>
                    <MyProject title={"first"} style={social}
                               discription={"описание не очень большое.Очень не большое. большое но не очень. но не большое. Очень не большое. большое но не очень. но не большое "}/>
                    <MyProject title={"second"} style={todos} discription={"Очень не большое. большое но не очень. но не большое "}/>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;