import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component<LoginContainerType> {

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/profile'/>
        }
        return <Login/>
    }
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {})(LoginContainer)


//type

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    isAuth: boolean
}

type LoginContainerType = MapStateToPropsType & MapDispatchToPropsType