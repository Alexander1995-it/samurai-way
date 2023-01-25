import React from "react";
import style from "./Profile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {CommonProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = CommonProfileContainerPropsType

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile__block}>
            <MyProfileInfo profilePage={props.profilePage}/>
            <MyPosts
                messagePost={props.profilePage.textPost}
                myPosts={props.profilePage.myPost}
                addPost={props.addPost}
                changePostText={props.changePostText}
            />
        </div>
    )
}

export default Profile