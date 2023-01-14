import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from "./Contacts.module.scss"
import Title from "../common/Components/Title/Title";
import Flip from 'react-reveal/Flip';
import {Button} from "./../common/Components/button/Button"
const Contacts = () => {
    return (
        <div id={"Contacts"} className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contacts}  `}>
                <Title text={"Contacts"}/>
<div className={style.formContainer}>
    <Flip>
        <form className={style.form}>
            <input className={style.formInput} placeholder={"Enter your name"}></input>
            <input className={style.formInput} placeholder={"Enter your e-mail"}></input>
            <textarea className={style.formTextarea} placeholder={"textarea"}/>
            <Button title={"SEND MAIL"}/>
        </form>
    </Flip>

</div>


            </div>

            </div>
    );
};

export default Contacts;