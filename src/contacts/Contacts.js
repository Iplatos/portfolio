import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from "./Contacts.module.scss"
import Title from "../common/Components/Title/Title";
import LightSpeed from 'react-reveal/LightSpeed';
import {Button} from "./../common/Components/button/Button"
const Contacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contacts}  `}>
                <Title text={"Contacts"}/>
<div className={style.formContainer}>
    <LightSpeed left>
        <form className={style.form}>
            <input className={style.formInput} placeholder={"Enter your name"}></input>
            <input className={style.formInput} placeholder={"Enter your e-mail"}></input>
            <textarea className={style.formTextarea} placeholder={"textarea"}/>
            <Button title={"SEND MAIL"}/>
        </form>
    </LightSpeed>

</div>


            </div>

            </div>
    );
};

export default Contacts;