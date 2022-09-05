import React from 'react';
import style from "./MyProject.module.css"

const MyProject = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
{props.description}
            </span>
        </div>
    );
};

export default MyProject;