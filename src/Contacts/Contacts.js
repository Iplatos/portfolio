import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.formwrapper}>
                Kontakt
            <form className={s.form}>
                <label>XXXX<input></input></label>
                <label>WWWW<input></input></label>
                <label>OOOO<textarea/></label>
                <button>Send</button>
            </form>
            </div>
        </div>
    );
};

export default Contacts;