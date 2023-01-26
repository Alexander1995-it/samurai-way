import axios from "axios";


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
    }
}

export const authMeAPI = {
    getAuthMe() {
        return instance.get('auth/me')
    }
}