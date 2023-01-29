import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionType} from "./profileReducer";
import {usersReducer, UsersReducerActionType} from "./usersReducer";
import {authReducer, AuthReducerActionType} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk"


export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionsType = ProfileReducerActionType | AuthReducerActionType | UsersReducerActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>