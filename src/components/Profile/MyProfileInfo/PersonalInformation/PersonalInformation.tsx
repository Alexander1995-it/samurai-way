import React from 'react';
import {ProfileType} from "../../../../redux/profileReducer";

type PersonalInformation = {
    profile: ProfileType
}

const PersonalInformation = (props: PersonalInformation) => {
    return (
        <div>
            <div>
                <span style={{fontFamily: "'Playfair Display', serif"}}>Personal information: </span>
                <div>
                    {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
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