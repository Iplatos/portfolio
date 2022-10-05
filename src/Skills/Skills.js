import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "../skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillBlock}>
            < div className={` ${style.skillsContainer} ${styleContainer.container} `}>
                <h2 className={style.title}> My Skills</h2>
                <div className={style.skills}>
            <Skill title={"JS"} discription={"описание не очень большое"}/>
            <Skill title={"CSS"} discription={"описание не очень большое,не очень большое"}/>
            <Skill title={"REACT"} discription={"описание не очень большое. Очень не большое. большое но не очень. но не большое "}/>
            </div></div>
        </div>

    );
};

export default Skills;