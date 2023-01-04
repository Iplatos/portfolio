import React from 'react';
import style from "./MyProject.module.scss"

const MyProject = (props) => {
    return (
        <div className={style.project}>

            <div className={style.MyProjectImage} style={props.style}>

                <div className={style.wrap}>
                    <button className={style.button}>WATCH</button>
                </div>


            </div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDiscription}>{props.discription}</div>
            </div>

        </div>
    );
};

export default MyProject;