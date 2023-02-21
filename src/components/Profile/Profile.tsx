import React, {useState} from "react";
import style from "./Profile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import {CommonProfileContainerPropsType} from "./ProfileContainer";
import {CircularProgress} from "@mui/material";
import {StatusAppType} from "../../redux/appReducer";
import ChangePersonalInformation from "./ChangePersonalInformation/ChangePersonalInformation";
import Button from "@mui/material/Button";

type ProfilePropsType = CommonProfileContainerPropsType & {
    statusApp: StatusAppType
}

const Profile = (props: ProfilePropsType) => {

    const [isEditMode, setIsEditMode] = useState(false)

    if (props.statusApp === 'loading') {
        return <div style={{display: 'flex', height: '70%', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className={style.profile__block}>
            {isEditMode
                ? <ChangePersonalInformation setIsEditMode={setIsEditMode} profile={props.profilePage.profile}/>
                : <MyProfileInfo params={props.match.params.userId} updateStatusProfileTC={props.updateStatusProfileTC}
                                 profilePage={props.profilePage}
                />
            }
           <div className={style.editModeButtonBlock}>
               <Button onClick={() => setIsEditMode(!isEditMode)} variant="outlined" size="small">
                   {isEditMode ? 'Back to profile' : 'Edit mode'}
               </Button>
           </div>
        </div>
    )
}

export default Profile