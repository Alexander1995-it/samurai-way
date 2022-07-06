import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state from './state/state'


function App() {

    let profile = state.profilePage
    let dialogs = state.dialogsPage

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <div className='app-main__container'>
                    <div className='app-main__wrapper'>
                        <Navbar/>
                        <div className='app-main__content'>
                            <Route path='/profile' render={() => <Profile profile={profile}/>}/>
                            <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}/>}/>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
