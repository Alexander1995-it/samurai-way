import React, {useState} from 'react';
import style from './MyProfileInfo.module.css'
import {InitialStateProfileReducerType, ProfileType} from "../../../redux/profileReducer";
import EditIcon from '@mui/icons-material/Edit';
import {IconButton} from "@mui/material";

type MyProfileInfoPropsType = {
    profilePage: InitialStateProfileReducerType
}
const MyProfileInfo = (props: MyProfileInfoPropsType) => {

const [localStatus, setLocalStatus] = useState(props.profilePage.status)

    return (
        <div className={style.profileInfo__block}>
            <div className={style.profileInfo__ava}>
                <img src={props.profilePage.profile.photos.small} alt="" width='150px' height='240px'/>
            </div>

            <div className={style.profileInfo__name}>
                <span className={style.profileInfo__name__label}>Name: </span>
                <span className={style.profileInfo__name__text}>{props.profilePage.profile.fullName}</span>
            </div>
            <div className={style.profileInfo__status}>
                   <div>
                       <span className={style.profileInfo__status__label}>Status: </span>
                       <span className={style.profileInfo__status__text}>{props.profilePage.status}</span>
                   </div>
                    <div className={style.editStatus}>
                        <IconButton sx={{color: 'black'}} component="span">
                            <EditIcon sx={{fontSize: '20px'}}/>
                        </IconButton>
                    </div>
            </div>
        </div>
    );
};

export default MyProfileInfo;