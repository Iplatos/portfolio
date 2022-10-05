import React from 'react';
import style from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import MyProject from "../myProject/MyProject";

const MyProjects = () => {
    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjects}  `}>
                <h2 className={style.projectTitle}> My Projects</h2>
                <div className={style.projects}>
<MyProject title={"first"}  discription={"описание не очень большое. Очень не большое. большое но не очень. но не большое "}/>
<MyProject title={"second"}  discription={"Очень не большое. большое но не очень. но не большое "}/>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;