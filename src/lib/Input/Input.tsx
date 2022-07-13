import React from 'react';
import s from './Input.module.css'

type InputPropsType = {
    value?: string
    placeholder?: string
    ref: any

}

const Input = (props: InputPropsType) => {
    return (
        <div className={s.input__block}>
            <input ref={props.ref} placeholder={props.placeholder} />
        </div>
    );
};

export default Input;