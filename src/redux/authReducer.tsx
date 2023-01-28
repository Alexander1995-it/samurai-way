import React from 'react';
import {authMeAPI} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateAuthReducerType = typeof initialState

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export type ProfileReducerActionType = GetAuthACType


export const authReducer = (state: InitialStateAuthReducerType = initialState, action: ProfileReducerActionType): InitialStateAuthReducerType => {
    switch (action.type) {
        case "GET_AUTH": {
            return {...state, ...action.payload}
        }

        default:
            return state
    }
}

export type GetAuthACType = ReturnType<typeof setIsAuth>
export const setIsAuth = (payload: PayloadIsAuthType) => ({type: "GET_AUTH", payload}) as const


export const setAuthMeTC = () => (dispatch: Dispatch) => {
    authMeAPI.getAuthMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsAuth({...response.data.data, isAuth: true}))
            }
        })
}


export const logoutTC = () => (dispatch: Dispatch) => {
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


