import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {Dispatch} from "redux";
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)


//type

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginContainerType = MapStateToPropsType