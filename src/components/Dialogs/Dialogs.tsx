import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {

}


type DialogsPropsType = {

}



const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={style.dialogs__wrapper}>
            <div className={style.name__block}>

            </div>
            <div className={style.dialog__block}></div>
        </div>
    );
};

export default Dialogs;