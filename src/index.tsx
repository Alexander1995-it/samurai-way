import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {InitialStateType} from './App';
import ava from './images/IMG_social-network.jpg'

let initialState: InitialStateType = {
    profilePage: {
        myProfile: {
            id: 1,
            name: 'Alexander',
            status: 'I am student Incubator',
            ava: ava
        },
        myPost: [
            {id:1, post: 'I am from Minsk', likes: 10},
            {id:2, post: 'I am student of Incubator',  likes: 20},
            {id:3, post: 'I am looking for a job',  likes: 8}
        ]
    }
}

ReactDOM.render(
    <App initialState={initialState}/>,
  document.getElementById('root')
);