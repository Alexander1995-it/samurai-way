import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)