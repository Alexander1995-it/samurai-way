import React from "react";
import style from "./Profile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import {CommonProfileContainerPropsType} from "./ProfileContainer";
import {CircularProgress} from "@mui/material";
import {StatusAppType} from "../../redux/appReducer";

type ProfilePropsType = CommonProfileContainerPropsType & {
    statusApp: StatusAppType
}

const Profile = (props: ProfilePropsType) => {

    if (props.statusApp === 'loading') {
        return <div  style={{display: 'flex', height: '70%', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className={style.profile__block}>
            <MyProfileInfo updateStatusProfileTC={props.updateStatusProfileTC}
                           profilePage={props.profilePage}
            />
        </div>
    )
}

export default Profile