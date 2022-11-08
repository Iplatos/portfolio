import React from 'react';
import style from "./MyProject.module.scss"

const MyProject = (props) => {
    return (
        <div className={style.project}>

            <div className={style.MyProjectImage} style={props.style}>
                {/*<img className={style.MyProjectImage} style={props.style}></img>*/}
                <button className={style.button}>СМОТРЕТЬ</button>


            </div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDiscription}>{props.discription}</div>
            </div>

        </div>
    );
};

export default MyProject;