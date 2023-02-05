import React from 'react'
import {ProfileType} from "../../../../redux/profileReducer"
import style from './PersonalInformation.module.css'

type PersonalInformation = {
    profile: ProfileType
}

const PersonalInformation = (props: PersonalInformation) => {
    return (
        <div className={style.personalInformationBlock}>
            <div className={style.aboutMeBlock}>
                <div className={style.textLabel}>About me:</div>
                <div className={style.textInformation}>{props.profile.aboutMe}
                </div>
            </div>
            <div className={style.descriptionAJobBlock}>
                <div className={style.textLabel}>Looking for a job:</div>
                <div
                    className={style.textInformation}>{props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</div>
            </div>
            <div>
                <div className={style.textLabel}>VK:</div>
                <div className={style.textInformation}>{props.profile.contacts.vk}</div>
            </div>
            {props.profile.contacts.facebook && <div>
                <div className={style.textLabel}>Facebook:</div>
                <div className={style.textInformation}>{props.profile.contacts.facebook}</div>
            </div>}
            {props.profile.contacts.github && <div>
                <div className={style.textLabel}>Github:</div>
                <div className={style.textInformation}> {props.profile.contacts.github}</div>
            </div>}
            {props.profile.contacts.twitter  && <div>
                <div className={style.textLabel}>Twitter:</div>
                <div className={style.textInformation}> {props.profile.contacts.twitter}</div>
                </div>}
            {props.profile.contacts.youtube && <div>
                <div className={style.textLabel}>Youtube:</div>
                <div className={style.textInformation}> {props.profile.contacts.youtube}</div>
            </div>}
            {props.profile.contacts.website && <div>
                <div className={style.textLabel}>Website:</div>
                <div className={style.textInformation}> {props.profile.contacts.website}</div>
            </div>}
            {props.profile.contacts.mainLink && <div>
                <div className={style.textLabel}>MainLink:</div>
                <div className={style.textInformation}> {props.profile.contacts.mainLink}</div>
            </div>}

        </div>
    );
};

export default PersonalInformation;