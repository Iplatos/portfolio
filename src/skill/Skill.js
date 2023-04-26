import React from 'react';
import style from "./Skill.module.scss"
import Rotate from 'react-reveal/Rotate';


const Skill = (props) => {
    return (

        <div className={ style.skill} >
            <div className={style.icon} style={props.style} ></div>
            <h3 className={style.title}>{props.title}</h3>
        </div>

    );
};

export default Skill;