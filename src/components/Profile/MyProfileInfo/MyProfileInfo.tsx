import React from 'react';
import {MyProfileType} from '../../../state/state';
import style from './MyProfileInfo.module.css'

type MyProfileInfoPropsType = {
    myProfile: MyProfileType
}
const MyProfileInfo = (props: MyProfileInfoPropsType) => {
    return (
        <div className={style.profileInfo__block}>
            <div className={style.profileInfo__ava}>
                <img src={props.myProfile.ava} alt="" width='150px' height='240px'/>
            </div>

            <div className={style.profileInfo__name}>
                <span className={style.profileInfo__name__label}>Name: </span>
                <span className={style.profileInfo__name__text}>{props.myProfile.name}</span>
            </div>
            <div className={style.profileInfo__status}>
                <span className={style.profileInfo__status__label}>Status: </span>
                <span className={style.profileInfo__status__text}>{props.myProfile.status}</span>
            </div>
        </div>
    );
};

export default MyProfileInfo;