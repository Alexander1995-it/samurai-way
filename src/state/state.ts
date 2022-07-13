import ava from "../images/IMG_social-network.jpg";
import {rerenderTree} from "../rerender";

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

export const addPost = (post: string) => {
    let newPost: MyPostType = {
        id: 4,
        post,
        likes: 0
    }
    state.profilePage.myPost.unshift(newPost)
    rerenderTree()
}
export const changeMessagePost = (postText: string) => {
    state.profilePage.messagePost = postText
    rerenderTree()
}

const state: RootState = {
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
}

export default state


