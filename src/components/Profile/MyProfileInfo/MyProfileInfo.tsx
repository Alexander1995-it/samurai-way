import React from 'react';
import {MyProfileType} from '../../../state/state';
import style from './MyProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";

type MyProfileInfoPropsType = {
    profile: ProfileType
}
const MyProfileInfo = (props: MyProfileInfoPropsType) => {
    return (
        <div className={style.profileInfo__block}>
            <div className={style.profileInfo__ava}>
                <img src={props.profile.photos.small} alt="" width='150px' height='240px'/>
            </div>

            <div className={style.profileInfo__name}>
                <span className={style.profileInfo__name__label}>Name: </span>
                <span className={style.profileInfo__name__text}>{props.profile.fullName}</span>
            </div>
            <div className={style.profileInfo__status}>
                <span className={style.profileInfo__status__label}>Status: </span>
                <span className={style.profileInfo__status__text}>{props.profile.aboutMe}</span>
            </div>
        </div>
    );
};

export default MyProfileInfo;