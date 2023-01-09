import React from 'react';
import s from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Photo from "./../assets/image/mf3.jpg"
import ParticlesComponent from "../common/Components/particlesComponent/ParticlesComponent";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


const Main = () => {
const myPhoto = {
    backgroundImage: `url(${Photo})`
}


    return (
        <div id="Main" className={s.mainBlock}>

            <div className={styleContainer.container}>

            <div className={s.text}>
                <ParticlesComponent className={s.particles} />
                < Fade left><span className={s.greetingsTitle}>Hi There</span></Fade>
                <Roll right><h1 className={s.titleName}>I'm Kirkor <span>Filippov</span></h1></Roll>
                <p className={s.greetingsTitle}>
                    <ReactTypingEffect text={["Frontend Developer"]} />
                </p>


            </div>

                <div className={s.PhotoContainer}>
                    <Roll right>
                        <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 500, width: 300 }} >
                            <div className={s.photo} style={myPhoto}></div>
                        </Tilt>


                    </Roll>
                </div>
            </div>
        </div>
    );
}

export default Main;