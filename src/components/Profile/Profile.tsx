import React from "react";
import style from "./Profile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import {CommonProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = CommonProfileContainerPropsType

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={style.profile__block}>
            <MyProfileInfo updateStatusProfileTC={props.updateStatusProfileTC}
                           profilePage={props.profilePage}
            />
        </div>
    )
}

export default Profile