import React from 'react';
import ava from "../images/IMG_social-network.jpg";

export type InitialStateProfileReducerType = typeof initialState

let initialState = {
        textPost: '',
        myProfile: {
            id: 1,
            name: 'Alexander',
            status: 'I am student Incubator',
            ava: ava
        },
        myPost: [
            {id: 1, post: 'I am from Minsk', likes: 10},
            {id: 2, post: 'I am student of Incubator', likes: 20},
            {id: 3, post: 'I am looking for a job', likes: 8}
        ]
}

export type ProfileReducerActionType = ChangeTextPostACType | AddPostACType
export type ChangeTextPostACType = ReturnType<typeof changeTextPostAC>
export type AddPostACType = ReturnType<typeof addPostAC>


export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ProfileReducerActionType): InitialStateProfileReducerType => {
    switch (action.type) {
        case "CHANGE_TEXT_POST": {
            return {...state, textPost: action.text}
        }
        case "ADD_POST": {
            let newPost = {id: 1, post: action.post, likes: 10}
            return {...state, myPost: [newPost, ...state.myPost] }
        }
        default:
            return state
    }
};

export const changeTextPostAC = (text: string) => ({type: "CHANGE_TEXT_POST", text}) as const
export const addPostAC = (post: string) => ({type: "ADD_POST", post}) as const