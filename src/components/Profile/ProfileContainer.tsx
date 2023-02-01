import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {
    getProfileTC,
    InitialStateProfileReducerType, setStatusTC,
    setUserProfile, updateStatusProfileTC
} from "../../redux/profileReducer";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {StatusAppType} from "../../redux/appReducer";

type PathParamsType = { userId: string }
export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    componentDidMount() {
        let paramsId = this.props.match.params.userId

        if (!paramsId) {
            paramsId = String(this.props.myId)
        }
        this.props.getProfileTC(+paramsId)
        this.props.setStatusTC(+paramsId)
    }

    componentDidUpdate(prevProps: Readonly<CommonProfileContainerPropsType>, prevState: Readonly<{}>) {
        let paramsId = this.props.match.params.userId
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            if (!paramsId) {
                paramsId = String(this.props.myId)
            }
            this.props.getProfileTC(+paramsId)
            this.props.setStatusTC(+paramsId)
        }
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to='/login'/>
        }
        return <Profile {...this.props}/>
    }
}


export type MapStateToPropsType = {
    profilePage: InitialStateProfileReducerType
    myId: null | number
    statusApp: StatusAppType
    isAuth: boolean
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        myId: state.auth.id,
        isAuth: state.auth.isAuth,
        statusApp: state.app.statusApp
    }
}

export type MapDispatchToPropsType = {
    setUserProfile: (payload: any) => void
    getProfileTC: (paramsId: number) => void
    setStatusTC: (userId: number) => void
    updateStatusProfileTC: (status: string) => void
}


export default connect(mapStateToProps, {
    setUserProfile,
    getProfileTC,
    setStatusTC,
    updateStatusProfileTC
})(withRouter(ProfileContainer))

