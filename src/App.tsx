import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/Header";
import LoginContainer from "./components/Login/LoginContainer";

function App() {


    return (

        <div className="App-wrapper">
            <BrowserRouter>
                <HeaderContainer/>
                <div className='app-main__container'>
                            <Switch>
                                <Route path='/login' render={() => <LoginContainer/>}/>
                                <Route path='/' render={() => {
                                    return (
                                        <div className='app-main__wrapper'>
                                        <Navbar/>
                                    <div className='app-main__content'>
                                        <Switch>
                                            <Route path='/profile:userId?' render={() => <ProfileContainer/>}/>
                                            <Route path='/dialogs' render={() => <Dialogs/>}/>
                                            <Route path='/users' render={() => <UsersContainer/>}/>
                                        </Switch>
                                    </div>
                                </div>
                                    )
                                }}/>
                            </Switch>
                </div>
            </BrowserRouter>
        </div>

    )
}

export default App
