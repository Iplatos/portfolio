import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "../skill/Skill";
import Title from "../common/Components/Title/Title";
import JsPNGIcon from "./../assets/image/js.png"
import ReactPNGIcon from "./../assets/image/react.png"
import ReduxPNGIcon
    from "./../assets/image/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
import CssPngIcon from "./../assets/image/css.png"
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import TypeScriptPNGIcon from "./../assets/image/Typescript.png"
import HTMLPNGIcon from "./../assets/image/HTML.png"
import PostmanPNGIcon from "./../assets/image/Postman.png"
import GitPNGIcon from "./../assets/image/github.jpg"
import NextJSIcon from "./../assets/image/download.jpg"

const Skills = () => {
    const CssIcon = {
        backgroundImage: `url(${CssPngIcon})`,

    }
    const PostmanIcon = {
        backgroundImage: `url(${PostmanPNGIcon})`,

    }
    const GitHubIcon = {
        backgroundImage: `url(${GitPNGIcon})`,

    }
    const HTLMIcon = {
        backgroundImage: `url(${HTMLPNGIcon})`,

    }
    const TypeScriptIcon = {
        backgroundImage: `url(${TypeScriptPNGIcon})`,

    }
    const ReactIcon = {
        backgroundImage: `url(${ReactPNGIcon})`
    }
    const JsIcon = {
        backgroundImage: `url(${JsPNGIcon})`
    }
    const ReduxIcon = {
        backgroundImage: `url(${ReduxPNGIcon})`
    }
    const NextJS = {
        backgroundImage: `url(${NextJSIcon})`
    }
    return (
        <div className={style.skillBlock}>

            < div id="Skills" className={` ${style.skillsContainer} ${styleContainer.container} `}>
                <LightSpeed top><Title text={"My skills"}/></LightSpeed>
                <div className={style.skills}>
                    <Rotate top left>
                        <Skill title={"HTML"} style={HTLMIcon} />
                        <Skill title={"JS"} style={JsIcon}/>
                        <Skill title={"CSS"} style={CssIcon}
                             />
                        <Skill title={"TypeScript"} style={TypeScriptIcon}
                               />
                        <Skill title={"REACT"} style={ReactIcon}
                            />
                        <Skill title={"REDUX"} style={ReduxIcon}
                              />
                        <Skill title={"Postman"} style={PostmanIcon}/>
                        <Skill title={"Git"} style={GitHubIcon}/>
                        <Skill title={"Next JS"} style={NextJS}/>

                    </Rotate>

                </div>
            </div>

        </div>

    );
};

export default Skills;