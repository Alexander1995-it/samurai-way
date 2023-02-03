import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import style from './ChangePersonalInformation.module.css'
import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";


const ChangePersonalInformation = () => {

    const profile = useSelector<AppRootState>(state => state.profilePage.profile)
      const [profileInformation, setProfileInformation] = useState(profile)

          return (
        <form className={style.formPersonalInformatiom}>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    value=''
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Facebook"
                    value=''
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Instagram"
                    value=''
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="VK"
                    value=''
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Website"
                    value=''
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Youtube"
                    value=''
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Github"
                    value=''
                />
            </div>
        </form>
    );
};

export default ChangePersonalInformation;