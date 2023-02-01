import React from 'react';
import style from './MyProfileInfo.module.css'
import {InitialStateProfileReducerType, ProfileType, updateStatusProfileTC} from "../../../redux/profileReducer";
import {StatusProfile} from "./StatusProfile/StatusProfile";
import noAvatar from '../../../images/NoAvatar.png'

type MyProfileInfoPropsType = {
    profilePage: InitialStateProfileReducerType
    updateStatusProfileTC: (status: string) => void
}
const MyProfileInfo = (props: MyProfileInfoPropsType) => {
    const myImages = {
        backgroundImage: props.profilePage.profile.photos.large ? `url(${props.profilePage.profile.photos.large})` : `url(${noAvatar})`
    }
    return (
        <div className={style.profileInfo__block}>
           <div>
               <div style={myImages} className={style.profileInfo__ava}></div>
               <div className={style.profileInfo__name}>
                   <span className={style.profileInfo__name__text}>{props.profilePage.profile.fullName}</span>
               </div>
           </div>
            <div>
                <StatusProfile updateStatusProfileTC={props.updateStatusProfileTC}
                               status={props.profilePage.status}
                />
            </div>
        </div>
    );
};

export default MyProfileInfo;