import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import style from './Login.module.css'

const Login = () => {
    return (
        <div className={style.login__block}>
            <LoginForm/>
        </div>
    )
}

export default Login;