import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Contacts.module.css"

const Contacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contacts}  `}>
                <h3>Контакты</h3>
<div className={style.formContainer}>
    <form className={style.form}>
        <input value={"input1"}></input>
        <input value={"input2"}></input>
    <textarea placeholder={"textarea"}/>
    </form>

</div>


            </div>

            </div>
    );
};

export default Contacts;