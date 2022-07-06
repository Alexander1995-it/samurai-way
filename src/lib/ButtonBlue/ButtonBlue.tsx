import React from 'react';
import s from './ButtonBlue.module.css'

type ButtonBluePropsType = {
    children: string
    onClick: () => void
}

const ButtonBlue = (props: ButtonBluePropsType) => {
    return (
        <div onClick={() => props.onClick()} className={s.btn__block}>
            {props.children}
        </div>
    );
};

export default ButtonBlue;