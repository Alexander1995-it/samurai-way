import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {store} from "./state/state";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/Header";
import LoginContainer from "./components/Login/LoginContainer";


function App() {

    let dialogs = store._state.dialogsPage

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer/>
                <div className='app-main__container'>
                    <div className='app-main__wrapper'>
                        <Navbar/>
                        <div className='app-main__content'>
                            <Route path='/profile:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
