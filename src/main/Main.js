import React, {useEffect, useState} from 'react';
import s from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Photo from "./../assets/image/mf3.jpg"
import ParticlesComponent from "../common/Components/particlesComponent/ParticlesComponent";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
const Main = () => {
const myPhoto = {
    backgroundImage: `url(${Photo})`
}


    return (
        <div className={s.mainBlock}>

            <div className={styleContainer.container}>

            <div className={s.text}>
                <ParticlesComponent className={s.particles} />
                < Fade left><span className={s.greetingsTitle}>Hi There</span></Fade>
                <Roll right><h1 className={s.titleName}>I'm Kirkor <span>Filippov</span></h1></Roll>
                <LightSpeed bottom><p className={s.greetingsTitle}>Frontend Developer</p></LightSpeed>
            </div>
                <div className={s.PhotoContainer}>
                    <Roll right>
                        <div className={s.photo} style={myPhoto}></div>
                    </Roll>
                </div>
            </div>
        </div>
    );
}

export default Main;