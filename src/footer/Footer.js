import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.scss";

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={`${styleContainer.container} ${style.footer}  `}>
<div className={style.footerText}>Kirkor Filippov</div>
                <div className={style.items}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
<div className={style.footerText}> © 2022 Все права защищены</div>

                </div>


            </div>
          )
            }
export default Footer
