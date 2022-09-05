import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from "./Accept.module.css";


const Accept = () => {
    return (
        <div className={s.acceptBlock}>
        <div className={`${styleContainer.container} ${s.acceptContainer}`}>

            <div >Рассматриваю варианты удалённой работы

            </div>
            <button>Нанять меня</button>
          </div>
        </div>
    );
};

export default Accept;