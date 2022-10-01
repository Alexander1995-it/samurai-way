

export type UserType = {id: number, followed: boolean, name: string, status: string, photos: {small: string, large: string}}

export type InitialStateUsersReducerType = {
    users:  UserType[]
}

const initialState = {
    users: []
}

type UsersReducerActionType = FollowACType | UnFollowACType | SetUsersType

export const usersReducer = (state: InitialStateUsersReducerType = initialState, action: UsersReducerActionType) => {
     switch (action.type) {
         case 'FOLLOW':
             return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: true}: user)}
         case 'UNFOLLOW':
             return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: false}: user)}
         case 'SET_USERS':
             return {...state, users: action.data}
         default: return state
     }
}

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const

type UnFollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const

type SetUsersType =ReturnType<typeof setUsersAC>
export const setUsersAC = (data: UserType[]) => ({type: 'SET_USERS', data}) as const


