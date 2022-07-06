import React from 'react';
import s from './Input.module.css'

type InputPropsType = {
   value: string
    placeholder?: string

}

const Input = (props: InputPropsType) => {
    return (
        <div className={s.input__block}>
            <input placeholder={props.placeholder}  value={props.value}/>
        </div>
    );
};

export default Input;