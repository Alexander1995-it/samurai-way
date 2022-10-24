import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {addPost, changePostText, InitialStateProfileReducerType, setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {userId: string}
export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {



    componentDidMount () {
        let paramsId = this.props.match.params.userId
        if (!paramsId) {
            paramsId = '3'
        }
        axios.get ('https://social-network.samuraijs.com/api/1.0/profile/' + paramsId)
            .then (response => {
                this.props.setUserProfile (response.data)
            })
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
}



export default connect(mapStateToProps, {
    addPost,
    changePostText,
    setUserProfile
})(withRouter(ProfileContainer))

