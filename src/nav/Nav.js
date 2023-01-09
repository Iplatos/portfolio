import React from 'react';
import s from "./Nav.module.scss"
import { Link, animateScroll as scroll } from "react-scroll";
import LightSpeed from 'react-reveal/LightSpeed';
const Nav = () => {
    return (
        <LightSpeed top>
            <div className={s.nav}>
                <Link
                    activeClass={s.active}
                    to="Main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Main</Link>
                <Link
                    activeClass={s.active}
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Skills</Link>
                <Link
                    activeClass={s.active}
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Projects</Link>
                <Link
                    activeClass={s.active}
                    to="Contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Contacts</Link>

            </div>
        </LightSpeed>
    );
};

export default Nav;