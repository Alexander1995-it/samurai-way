import React from 'react';

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
            return {...state, ...action.payload, isAuth: true}
        }

        default:
            return state
    }
}

export type GetAuthACType = ReturnType<typeof getAuth>
export const getAuth = (payload: any) => ({type: "GET_AUTH", payload}) as const

