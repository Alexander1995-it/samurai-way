import React from 'react'
import InputForLogin from './InputForLogin'

import {Button} from '@mui/material'
import style from './LoginForm.module.css'

const LoginForm = () => {
    return (
        <form className={style.loginForm__block}>
            <div>
                <InputForLogin value={''} onChange={() => {
                }} label='Email' name='email'/>
                <div style={{height: '30px'}}></div>
            </div>
            <div>
                <InputForLogin value={''} onChange={() => {
                }} label='Password' name='Password'/>
                <div style={{height: '30px'}}></div>
            </div>
            <Button className={style.buttonLogin} variant="outlined" type="submit">SIGN IN</Button>
        </form>
    )
}

export default LoginForm