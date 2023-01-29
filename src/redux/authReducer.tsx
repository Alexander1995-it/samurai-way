import React from 'react';
import {authMeAPI, LoginRequestType} from "../api/api";
import {AppThunk} from "./store";

export type InitialStateAuthReducerType = typeof initialState

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}




export const authReducer = (state: InitialStateAuthReducerType = initialState, action: AuthReducerActionType): InitialStateAuthReducerType => {
    switch (action.type) {
        case "GET_AUTH": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//typesActions
export type AuthReducerActionType = GetAuthACType
export type GetAuthACType = ReturnType<typeof setIsAuth>

//actions

export const setIsAuth = (payload: PayloadIsAuthType) => ({type: "GET_AUTH", payload}) as const

//thunks

export const setAuthMeTC = (): AppThunk => (dispatch) => {
    authMeAPI.getAuthMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsAuth({...response.data.data, isAuth: true}))
            }
        })
}

export const loginTC = (payload: LoginRequestType): AppThunk => (dispatch) => {
    authMeAPI.login(payload)
        .then (response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthMeTC())
            }
        })
}


export const logoutTC = (): AppThunk => (dispatch) => {
    authMeAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsAuth({
                    id: null,
                    email: null,
                    login: null,
                    isAuth: false
                }))
            }
        })
}

// type

type PayloadIsAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


