import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import Flip from 'react-reveal/Flip';
import codewars from "../assets/image/logo.svg";

const codewarsLogo = {
    backgroundImage: `url(${codewars})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

const Footer = () => {

    return (
        <div className={style.footerContainer}>
            <div className={`${styleContainer.container} ${style.footer}  `}>
                <Flip>
                    <div className={style.footerText}>Kirkor Filippov</div>
                    <div className={style.items}>
                        <a target="_blank" href={"https://www.codewars.com/users/Iplatos"} className={style.item}
                           style={codewarsLogo}></a>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                    </div>
                    <div className={style.footerText}> © 2022 All Rights Reserved.</div>
                </Flip>

            </div>


        </div>
    )
}
export default Footer
