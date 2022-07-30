
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export const rerenderTree = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

rerenderTree()



