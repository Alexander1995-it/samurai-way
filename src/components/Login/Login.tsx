import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import style from './Login.module.css'
import {LoginRequestType} from "../../api/api";

type LoginType = {
    loginTC: (payload: LoginRequestType) => void
}

const Login = (props: LoginType) => {
    return (
        <div className={style.login__block}>
            <LoginForm loginTC={props.loginTC}/>
        </div>
    )
}

export default Login;