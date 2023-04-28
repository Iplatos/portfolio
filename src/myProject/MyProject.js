import React from 'react';
import style from "./MyProject.module.scss"
import {Button} from "../common/Components/button/Button";

const MyProject = (props) => {
    return (
        <div className={style.project}>
            <div className={style.MyProjectImage} style={props.style}>
                <Button link={props.link} title={"WATCH"}/>


            </div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDescription}>{props.description}  <a target="_blank" href={props.GitHubLink} >...more</a></div>
            </div>

        </div>
    );
};

export default MyProject;