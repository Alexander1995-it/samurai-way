import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {
    addPost,
    changePostText,
    getProfileTC,
    InitialStateProfileReducerType, setStatusTC,
    setUserProfile
} from "../../redux/profileReducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = { userId: string }
export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    componentDidMount() {
        let paramsId = this.props.match.params.userId

        if (!paramsId) {
            paramsId = String(this.props.profilePage.profile.userId)
        }
        this.props.getProfileTC(+paramsId)
        this.props.setStatusTC(+paramsId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}


export type MapStateToPropsType = {
    profilePage: InitialStateProfileReducerType
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}

export type MapDispatchToPropsType = {
    addPost: (post: string) => void
    changePostText: (text: string) => void
    setUserProfile: (payload: any) => void
    getProfileTC: (paramsId: number) => void
    setStatusTC: (userId: number) => void
}


export default connect(mapStateToProps, {
    addPost,
    changePostText,
    setUserProfile,
    getProfileTC,
    setStatusTC
})(withRouter(ProfileContainer))

