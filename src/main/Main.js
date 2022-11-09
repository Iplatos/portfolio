import React, {useEffect, useState} from 'react';
import s from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Photo from "./../assets/image/mf3.jpg"

const Main = () => {
const myPhoto = {
    backgroundImage: `url(${Photo})`
}


    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.text}>

            <span className={s.greetingsTitle}>Hi There</span>
            <h1 className={s.titleName}>I'm Kirkor Filippov</h1>
            <p className={s.greetingsTitle}>Frontend Developer</p>
            </div>
                <div className={s.PhotoContainer}>
                    <div className={s.photo} style={myPhoto}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;