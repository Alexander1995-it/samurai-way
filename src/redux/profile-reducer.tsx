import React from 'react';
import ava from "../images/IMG_social-network.jpg";

export type InitialStateProfileReducerType = typeof initialState
export type ProfileType = typeof initialState.profile

let initialState = {
    textPost: '',
    profile: {
        fullName: 'Alexander',
        lookingForAJob: true,
        lookingForAJobDescription: null,
        userId: 1,
        aboutMe: 'I am student Incubator',
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        },
        photos: {
            small: ava, large: null
        }
    },
    myPost: [
        {id: 1, post: 'I am from Minsk', likes: 10},
        {id: 2, post: 'I am student of Incubator', likes: 20},
        {id: 3, post: 'I am looking for a job', likes: 8}
    ]
}

export type ProfileReducerActionType =
    ChangeTextPostACType |
    AddPostACType |
    SetUserProfileType


export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ProfileReducerActionType): InitialStateProfileReducerType => {
    switch (action.type) {
        case "CHANGE_TEXT_POST": {
            return {...state, textPost: action.text}
        }
        case "ADD_POST": {
            let newPost = {id: 1, post: action.post, likes: 10}
            return {...state, myPost: [newPost, ...state.myPost]}
        }
        case 'SET_USER_PROFILE':
            return {...state, profile: action.payload}
        default:
            return state
    }
}

export type ChangeTextPostACType = ReturnType<typeof changePostText>
export const changePostText = (text: string) => ({type: "CHANGE_TEXT_POST", text}) as const

export type AddPostACType = ReturnType<typeof addPost>
export const addPost = (post: string) => ({type: "ADD_POST", post}) as const

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (payload: any) => ({type: 'SET_USER_PROFILE', payload}) as const