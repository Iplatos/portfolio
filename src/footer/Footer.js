import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import Flip from 'react-reveal/Flip';
import codewars from "../assets/image/CodeWarsLogo.png";
import GitHub from "../assets/image/github.jpg";
import Telegram from "../assets/image/telegramlogo.jpg";

const codewarsLogo = {
    backgroundImage: `url(${codewars})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}
const telegramLogo = {
    backgroundImage: `url(${Telegram})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}
const GitHubLogo = {
    backgroundImage: `url(${GitHub})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

const Footer = () => {

    return (
        <div className={style.footerContainer}>
            <div className={`${styleContainer.container} ${style.footer}  `}>
                <Flip>
                    <div className={style.footerText}>Ihar Platonau</div>
                    <div className={style.items}>
                        <a target="_blank" href={"https://www.codewars.com/users/rsschool_4d3751abbf26b5e7"} className={style.item}
                           style={codewarsLogo}></a>
                        <a target="_blank" href={"https://t.me/IngvarPla"} className={style.item}
                           style={telegramLogo}></a>
                        <a target="_blank" href={"https://github.com/Iplatos"} className={style.item}
                           style={GitHubLogo}></a>


                    </div>
                    <div className={style.footerText}> © 2024 All Rights Reserved.</div>
                </Flip>

            </div>


        </div>
    )
}
export default Footer
