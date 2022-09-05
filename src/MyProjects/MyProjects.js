import React from "react";
import s from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import MyProject from "./MyProject/MyProject";

const MyProjects = () => {
    return (
        <div className={s.MyProjectsBlock}>
        <div className={`${styleContainer.container} ${s.MyProjectsContainer}`}>
    <h3 className={s.title}>My Projects</h3>
        <div className={s.projects}>
    <MyProject title={"Название1"} description={"Описание не очень большое"}/>
    <MyProject title={"Название2"} description = {" Описание не очень большое очень не большое"}/>
    </div>
    </div>
    </div>
);
};

export default MyProjects;