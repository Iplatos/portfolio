import React, {useEffect, useState} from 'react';
import s from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Main = () => {



    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.text}>

            <span className={s.greetingsTitle}>Hi There</span>
            <h1 className={s.titleName}>I'm Kirkor Filippov</h1>
            <p className={s.greetingsTitle}>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;