import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "../skill/Skill";
import Title from "../common/Components/Title/Title";
import JsPNGIcon from "./../assets/image/js.png"
import ReactPNGIcon from "./../assets/image/react.png"
import CssPngIcon from "./../assets/image/css.png"
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';


const Skills = () => {
    const CssIcon = {
        backgroundImage: `url(${CssPngIcon})`,

    }
    const ReactIcon = {
        backgroundImage: `url(${ReactPNGIcon})`
    }
    const JsIcon = {
        backgroundImage: `url(${JsPNGIcon})`
    }
    return (
        <div className={style.skillBlock}>

                < div id="Skills" className={` ${style.skillsContainer} ${styleContainer.container} `}>
                    <LightSpeed top><Title text={"My skills"}/></LightSpeed>
                    <div className={style.skills}>
                            <Rotate  top left >
                                <Skill title={"JS"} style={JsIcon} discription={"описание не очень большое"}/>
                        <Skill title={"CSS"} style={CssIcon}
                               discription={"описание не очень большое,не очень большое"}/>
                        <Skill title={"REACT"} style={ReactIcon}
                               discription={"описание не очень большое. Очень не большое. большое но не очень. но не большое "}/>
                        </Rotate>
                    </div>
                </div>

        </div>

    );
};

export default Skills;