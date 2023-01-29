import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "./store";

export type UserType = { id: number, followed: boolean, name: string, status: string, photos: { small: string, large: string } }

export type InitialStateUsersReducerType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Number[]

}

const initialState = {
    users: [],
    totalCount: 120,
    pageSize: 20,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateUsersReducerType = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        case 'SET_USERS':
            return {...state, users: action.data}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_COUNT':
            return {...state, totalCount: action.totalCount}
        case 'SET_LOADING':
            return {...state, isLoading: action.loading}
        case 'ADD_ID_IN_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el != action.userId)
            }
        default:
            return state
    }
}

//typesActions
export type UsersReducerActionType =
    FollowACType |
    UnFollowACType |
    SetUsersType |
    SetCurrentPageACType |
    SetTotalCountACType |
    SetLoadingACType |
    AddIdInFollowingProgressType

type FollowACType = ReturnType<typeof follow>
type UnFollowACType = ReturnType<typeof unfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetLoadingACType = ReturnType<typeof setLoading>
type SetTotalCountACType = ReturnType<typeof setTotalCount>
type AddIdInFollowingProgressType = ReturnType<typeof addIdInFollowingProgress>


//actions

export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (data: UserType[]) => ({type: 'SET_USERS', data}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setTotalCount = (totalCount: number) => ({type: 'SET_TOTAL_COUNT', totalCount}) as const
export const setLoading = (loading: boolean) => ({type: 'SET_LOADING', loading}) as const
export const addIdInFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'ADD_ID_IN_FOLLOWING_PROGRESS',
    isFetching,
    userId
}) as const

//thunks
export const getUsersTC = (pageSize: number, currentPage: number = 1):AppThunk => (dispatch) => {
    dispatch(setLoading(true))
    usersAPI.getUsers(pageSize, currentPage)
        .then((response) => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalCount(response.data.totalCount))
            dispatch(setCurrentPage(currentPage))
            dispatch(setLoading(false))
        })
}


export const addFollowTC = (userId: number): AppThunk => (dispatch) => {
  dispatch (addIdInFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch (follow(userId))
              dispatch(addIdInFollowingProgress(false, userId))
            }

        })
}

export const addUnfollowTC = (userId: number): AppThunk => (dispatch) => {
   dispatch(addIdInFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(unfollow(userId))
               dispatch(addIdInFollowingProgress(false, userId))
            }
        })
}