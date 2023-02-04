import React from 'react'
import InputForLogin from './InputForLogin'
import {Button} from '@mui/material'
import style from './LoginForm.module.css'
import {useFormik} from 'formik'
import {LoginRequestType} from '../../../api/api'

type FormikErrorType = {
    email?: string
    password?: string
}

type LoginFormType = {
    loginTC: (payload: LoginRequestType) => void
}

const LoginForm = (props: LoginFormType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validate: (values) => {

            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.password.length < 7) {
                errors.password = 'Password must be more than 7 characters...'
            }
            if (!values.password) {
                errors.password = 'Required'
            }

            return errors
        },

        onSubmit: values => {
            const data = {
                email: values.email,
                password: String(values.password)
            }
            props.loginTC(data)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={style.loginForm__block}>
            <div>
                <InputForLogin value={formik.values.email} onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               label='Email' name={'email'}/>
                <div style={{height: '30px'}}>
                    {formik.touched.email && <span style={{color: 'red'}}>{formik.errors.email}</span>}
                </div>
            </div>
            <div>
                <InputForLogin value={formik.values.password} onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               label='Password' name={'password'}/>
                <div style={{height: '30px'}}>
                    {formik.touched.password && <span style={{color: 'red'}}>{formik.errors.password}</span>}
                </div>
            </div>
            <Button className={style.buttonLogin} variant='outlined' type='submit'>SIGN IN</Button>
        </form>
    )
}

export default LoginForm

