import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from "./AboutWork.module.scss"
import Title from "../common/Components/Title/Title";
const AboutWork = () => {
    return (
        <div className={style.aboutWorkContainer}>
             <div className={`${styleContainer.container} ${style.aboutWork}  `}>
                 <div className={style.takeMe}>
                     <div className={style.title}>I'm available for Freelance</div>
                     <button className={style.aboutWorkButton}>HIRE ME</button>
                 </div>

             </div>


        </div>
    );
};

export default AboutWork;