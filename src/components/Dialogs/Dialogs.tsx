import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsPageType} from "../../state/state";

type DialogItemPropsType = {
    id: number
    name: string
}


type DialogsPropsType = {
    dialogs: DialogsPageType[]
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <NavLink className={style.link__item} to={`/dialogs/${props.id}`}>
            <div className={style.name__item}>{props.name}</div>
        </NavLink>
    )
}


const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={style.dialogs__wrapper}>
            <div className={style.name__block}>
                {props.dialogs.map(item => <DialogItem id={item.id} name={item.name}/>)}
            </div>
            <div className={style.dialog__block}></div>
        </div>
    );
};

export default Dialogs;