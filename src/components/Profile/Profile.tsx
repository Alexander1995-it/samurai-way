import React from 'react';
import style from './Profile.module.css'
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootState} from "../../redux/store";
import {addPostAC, changeTextPostAC, InitialStateProfileReducerType} from "../../redux/profile-reducer";

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile__block}>
            <MyProfileInfo myProfile={props.profilePage.myProfile}/>
            <MyPosts
                messagePost={props.profilePage.textPost}
                myPosts={props.profilePage.myPost}
                addPost={props.addPost}
                changePostText={props.changePostText}
            />
        </div>
    );
};

type MapStateToPropsType = {
    profilePage: InitialStateProfileReducerType
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}

type MapDispatchToPropsType = {
    addPost: (post: string) => void
    changePostText: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (post: string) => {
            dispatch(addPostAC(post))
        },
        changePostText: (text: string) => {
            dispatch(changeTextPostAC(text))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

