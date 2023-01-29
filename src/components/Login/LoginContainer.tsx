import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../redux/authReducer";
import {LoginRequestType} from "../../api/api";

class LoginContainer extends React.Component<LoginContainerType> {

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/profile'/>
        }
        return <Login loginTC={this.props.loginTC}/>
    }
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
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