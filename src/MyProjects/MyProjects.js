import React from 'react';
import style from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import MyProject from "../myProject/MyProject";
import Title from "../common/Components/Title/Title";

const MyProjects = () => {
    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjects}  `}>
               <Title text = {"My Projects"}/>
                <div className={style.projects}>
                    <MyProject title={"first"}
                               discription={"описание не очень большое. Очень не большое. большое но не очень. но не большое "}/>
                    <MyProject title={"second"} discription={"Очень не большое. большое но не очень. но не большое "}/>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;