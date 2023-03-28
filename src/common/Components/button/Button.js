import React, {useRef} from 'react';
import s from "../../Components/button/button.module.scss";


export const Button = (props) => {

    const linkRef = useRef()

    const linkToProject = () => {
        linkRef && linkRef.current?.click();
    }


    return (

        <div className={s.wrap}>
            <button className={s.button} onClick={linkToProject}>{props.title}</button>
            <a href={props.link} ref={linkRef} style={{display: "none"}} target="_blank"></a>

        </div>
    );
};

