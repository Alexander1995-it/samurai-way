import React from 'react'
import {ProfileType} from "../../../../redux/profileReducer"
import style from './PersonalInformation.module.css'

type PersonalInformation = {
    profile: ProfileType
}

const PersonalInformation = (props: PersonalInformation) => {
    return (
        <div className={style.personalInformationBlock}>
            <div className={style.labelInfo}>Personal information:</div>
            <div className={style.personalInformation}>
                <div className={style.aboutMeBlock}>
                    <span>About me: </span> {props.profile.aboutMe}
                </div>
                <div className={style.descriptionAJobBlock}>
                   <span>Looking for a lob description: </span> {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
                </div>
                <div>
                    {props.profile.contacts.vk}
                    {props.profile.contacts.facebook}
                    {props.profile.contacts.github}
                    {props.profile.contacts.twitter}
                    {props.profile.contacts.youtube}
                    {props.profile.contacts.website}
                    {props.profile.contacts.mainLink}
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;