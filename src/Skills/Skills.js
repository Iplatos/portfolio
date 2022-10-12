import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "../skill/Skill";
import Title from "../common/Components/Title/Title";


const Skills = () => {
    return (
        <div className={style.skillBlock}>
            < div className={` ${style.skillsContainer} ${styleContainer.container} `}>
                <Title text = {"My Skills"}/>
                <div className={style.skills}>
            <Skill title={"JS"} discription={"описание не очень большое"}/>
            <Skill title={"CSS"} discription={"описание не очень большое,не очень большое"}/>
            <Skill title={"REACT"} discription={"описание не очень большое. Очень не большое. большое но не очень. но не большое "}/>
            </div></div>
        </div>

    );
};

export default Skills;