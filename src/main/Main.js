import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.text}>

                    <span>Hi there!</span>
                    <h1>I'm Kirkor Filippov</h1>
                    <p>FrontEnd Developer</p>
                </div>
                <div className={style.photo}>
                </div>

            </div>
        </div>
    );
};

export default Main;