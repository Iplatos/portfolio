import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./AboutWork.module.css"
const AboutWork = () => {
    return (
        <div className={style.aboutWorkContainer}>
             <div className={`${styleContainer.container} ${style.aboutWork}  `}>
                 <div className={style.takeMe}>
                     <div className={style.title}>Рассматриваю варианты удалённой работы</div>
                     <button>нанять меня</button>
                 </div>

             </div>


        </div>
    );
};

export default AboutWork;