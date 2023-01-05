import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from "./AboutWork.module.scss"
import Title from "../common/Components/Title/Title";
import LightSpeed from 'react-reveal/LightSpeed';
import {Button} from "./../common/Components/button/Button"
const AboutWork = () => {
    return (
        <div className={style.aboutWorkContainer}>
            <LightSpeed right>
                <div className={`${styleContainer.container} ${style.aboutWork}  `}>
                    <div className={style.takeMe}>
                        <div className={style.title}>I'm available for Freelance</div>
                       <Button title={"HIRE ME"}/>
                    </div></div>
            </LightSpeed>




        </div>
    );
};

export default AboutWork;