import React from 'react';
import s from "./Header.module.scss"
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.scss";


const Header = () => {
    return (
        <div className={styleContainer.container}>
            <div className={s.header}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;