import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";


export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)