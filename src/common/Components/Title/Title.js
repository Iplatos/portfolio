import React from 'react';
import style from "./Title.module.scss"


const Title = (props) => {
    return (

        <div className={style.projectTitle}>
            <h2>{props.text} </h2>
        </div>

    );
};

export default Title;