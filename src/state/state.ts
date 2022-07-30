import ava from "../images/IMG_social-network.jpg";
import {rerenderTree} from './../index'

export type MyProfileType = {
    id: number,
    name: string,
    status: string,
    ava: any
}
export type MyPostType = {
    id: number,
    post: string,
    likes: number
}
export type ProfilePageType = {
    messagePost: string
    myProfile: MyProfileType
    myPost: Array<MyPostType>
}
export type InitialStateType = {
    profilePage: ProfilePageType
}
export type DialogsPageType = {
    id: number
    name: string
}

type RootState = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType[]
}

export type StorePropsType = {
    _state: RootState
    dispatch: (action: ActionType) => void
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof changeMessagePostAC>


export const store: StorePropsType = {
    _state: {
        profilePage: {
            messagePost: '',
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
        },
        dialogsPage: [
            {id: 1, name: 'Alexander'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Ruslan'}
        ]
    },
    dispatch(action: ActionType) {
        if (action.type === "CHANGE_MESSAGE_POST") {
            this._state.profilePage.messagePost = action.postText
            rerenderTree()
        } else if (action.type === "ADD_POST") {
            let newPost: MyPostType = {
                id: 4,
                post: action.post,
                likes: 0
            }
            this._state.profilePage.myPost.unshift(newPost)
            rerenderTree()
        }
    }

}
export const changeMessagePostAC = (postText: string) => ({type: 'CHANGE_MESSAGE_POST', postText}) as const
export const addPostAC = (post: string) => ({type: "ADD_POST", post}) as const




