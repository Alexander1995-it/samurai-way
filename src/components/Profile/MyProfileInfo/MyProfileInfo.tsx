import React from 'react';
import style from './MyProfileInfo.module.css'
import {InitialStateProfileReducerType, ProfileType, updateStatusProfileTC} from "../../../redux/profileReducer";
import {StatusProfile} from "./StatusProfile/StatusProfile";

type MyProfileInfoPropsType = {
    profilePage: InitialStateProfileReducerType
    updateStatusProfileTC: (status: string) => void
}
const MyProfileInfo = (props: MyProfileInfoPropsType) => {

    return (
        <div className={style.profileInfo__block}>
            <div className={style.profileInfo__ava}>
                <img src={props.profilePage.profile.photos.small} alt="" width='150px' height='240px'/>
            </div>

            <div className={style.profileInfo__name}>
                <span className={style.profileInfo__name__label}>Name: </span>
                <span className={style.profileInfo__name__text}>{props.profilePage.profile.fullName}</span>
            </div>
            <StatusProfile updateStatusProfileTC={props.updateStatusProfileTC}
                           status={props.profilePage.status}
            />
        </div>
    );
};

export default MyProfileInfo;