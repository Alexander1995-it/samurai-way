import React from 'react';
import style from './Profile.module.css'
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../state/state";

type ProfilePropsType = {
    profile: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={style.profile__block}>
            <MyProfileInfo myProfile={props.profile.myProfile}/>
            <MyPosts
                messagePost={props.profile.messagePost}
                myPosts={props.profile.myPost}
            />
        </div>
    );
};

export default Profile;