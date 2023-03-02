import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionType} from "./profileReducer";
import {usersReducer, UsersReducerActionType} from "./usersReducer";
import {authReducer, AuthReducerActionType} from "./authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {appReducer, ActionsAppReducerType} from "./appReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionsType =
    | ProfileReducerActionType
    | AuthReducerActionType
    | UsersReducerActionType
    | ActionsAppReducerType

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>