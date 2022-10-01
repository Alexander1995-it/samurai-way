import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {store} from "./state/state";
import {ProfileContainer} from "./components/Profile/Profile";
import {UsersContainer} from "./components/Users/Users";


function App() {

    let profile = store._state.profilePage
    let dialogs = store._state.dialogsPage

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <div className='app-main__container'>
                    <div className='app-main__wrapper'>
                        <Navbar/>
                        <div className='app-main__content'>
                            <Route path='/profile' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
