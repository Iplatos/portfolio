import React from 'react';
import style from "./MyProject.module.css"

const MyProject = (props) => {
    return (
        <div className={style.project}>

            <div className={style.projectImg}>
                <img className={style.MyProjectImage} style={props.style}></img>
                <button>Смотреть</button>


            </div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDiscription}>{props.discription}</div>
            </div>

        </div>
    );
};

export default MyProject;