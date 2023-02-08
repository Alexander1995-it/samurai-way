import React, {ChangeEvent} from 'react';
import style from './MyProfileInfo.module.css'
import {
    editProfileAvatarTC,
    InitialStateProfileReducerType
} from "../../../redux/profileReducer";
import {StatusProfile} from "./StatusProfile/StatusProfile";
import noAvatar from '../../../images/NoAvatar.png'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import PartyModeIcon from '@mui/icons-material/PartyMode';
import {IconButton} from "@mui/material";
import {useAppDispatch} from "../../../common/hooks/hooks";

type MyProfileInfoPropsType = {
    profilePage: InitialStateProfileReducerType
    updateStatusProfileTC: (status: string) => void
}
const MyProfileInfo = (props: MyProfileInfoPropsType) => {

    const dispatch = useAppDispatch()

    const myImages = {
        backgroundImage: props.profilePage.profile.photos.large ? `url(${props.profilePage.profile.photos.large})` : `url(${noAvatar})`
    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            dispatch(editProfileAvatarTC(e.target.files[0]))
        }
    }

    return (
        <div className={style.wrapperProfileInfo}>
            <div className={style.avaAndNameBlock}>
                <div style={myImages} className={style.avaBlock}>
                    <label className={style.avatarButton}>
                        <input type="file"
                            // onError={errorHandler}
                               onChange={uploadHandler}
                               style={{display: 'none'}}
                               accept='image/*'/>
                        <IconButton component="span">
                            <PartyModeIcon/>
                        </IconButton>
                    </label>
                </div>

                <div className={style.nameBlock}>
                    {props.profilePage.profile.fullName}
                </div>
            </div>
            <div className={style.infoBlock}>
                <StatusProfile updateStatusProfileTC={props.updateStatusProfileTC}
                               status={props.profilePage.status}/>
                <PersonalInformation profile={props.profilePage.profile}/>
            </div>
        </div>
    )
}

export default MyProfileInfo;