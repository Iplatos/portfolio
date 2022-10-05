import React from 'react';
import style from "./MyProject.module.css"

const MyProject = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectTitle}>{props.title}</div>
            <div className={style.projectImg}>
                <button>Смотреть</button>
                <img  src={props.img}/>

            </div>
            <div className={style.projectDiscription}>{props.discription}</div>

        </div>
    );
};

export default MyProject;