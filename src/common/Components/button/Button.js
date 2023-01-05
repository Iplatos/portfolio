import React from 'react';
import s from "../../Components/button/button.module.scss";



export const Button = (props) => {
    return (

            <div className={s.wrap}>
                <button className={s.button}>{props.title}</button>
            </div>
    );
};

