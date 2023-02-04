import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../redux/profileReducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'da9cb287-f4c3-4451-9409-0a992045ae44'
    }
})

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}


export const profileAPI = {
    getPtofile(paramsId: number) {
        return instance.get(`profile/${paramsId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    updatePersonalInformation (model: UpdateModelProfileType) {
        return instance.put<UpdateModelProfileType, AxiosResponse<ResponseType>>(`profile`, model)
    }
}

export const authMeAPI = {
    getAuthMe() {
        return instance.get('auth/me')
    },
    login(payload: LoginRequestType) {
        return instance.post<LoginRequestType, AxiosResponse<ResponseType>>('auth/login', payload)
    },
    logout() {
        return instance.delete('auth/login')
    }
}

//type

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export type LoginRequestType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export type UpdateModelProfileType = {
        fullName: null | string
        lookingForAJob: boolean,
        lookingForAJobDescription: null | string,
        userId: null | number,
        contacts: {
            facebook: null | string,
            github: null | string,
            instagram: null | string,
            mainLink: null | string,
            twitter: null | string,
            vk: null | string,
            website: null | string,
            youtube: null | string
        }
}