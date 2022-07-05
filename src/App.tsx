import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

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
    myProfile: MyProfileType
    myPost: Array<MyPostType>
}

export type InitialStateType = {
    profilePage: ProfilePageType
}

export type RootStatePropsType = {
    initialState: InitialStateType
}



function App(props: RootStatePropsType) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <div className='app-main__container'>
                    <div className='app-main__wrapper'>
                        <Navbar/>
                        <div className='app-main__content'>
                            <Route path='/profile' render={() => <Profile profile={props.initialState.profilePage}/>}/>
                            <Route path='/dialogs' component={Dialogs}/>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
