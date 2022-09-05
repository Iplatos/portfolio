import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"ddddd dddddd dddd"}/>
                    <Skill title={"CSS"} description = {"ass sssssssssssssss"}/>
                    <Skill title={"React"} description = {"ggg gggggg gggggg"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;