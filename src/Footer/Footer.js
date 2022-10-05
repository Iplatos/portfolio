import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={`${styleContainer.container} ${style.footer}  `}>
<div>Kirkor Filippov</div>
                <div className={style.items}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
<div> © 2022 Все права защищены</div>

                </div>


            </div>
          )
            }
export default Footer
