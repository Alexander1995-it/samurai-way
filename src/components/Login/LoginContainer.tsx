import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../redux/authReducer";
import {LoginRequestType} from "../../api/api";
import {AppRootStateType} from "../../redux/store";

class LoginContainer extends React.Component<LoginContainerType> {

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/profile'/>
        }
        return <Login loginTC={this.props.loginTC}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    loginTC
})(LoginContainer)


//type

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginTC: (payload: LoginRequestType) => void
}

type LoginContainerType = MapStateToPropsType & MapDispatchToPropsType