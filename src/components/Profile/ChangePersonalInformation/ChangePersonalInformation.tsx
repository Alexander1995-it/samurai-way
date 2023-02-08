import React from 'react';
import TextField from '@mui/material/TextField';
import style from './ChangePersonalInformation.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ProfileType, updateInformationProfileTC} from "../../../redux/profileReducer";
import {useFormik} from "formik";
import {Button} from "@mui/material";
import SuccessSnackbars from "../../../common/SuccessSnacbar";

type ChangePersonalInformationType = {
    profile: ProfileType
    setIsEditMode: (isEditMode: boolean) => void
}

const ChangePersonalInformation = (props: ChangePersonalInformationType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            userId: null as null | number,
            facebook: props.profile.contacts.facebook,
            github: props.profile.contacts.github,
            instagram: props.profile.contacts.instagram,
            mainLink: props.profile.contacts.mainLink,
            twitter: props.profile.contacts.twitter,
            vk: props.profile.contacts.vk,
            website: props.profile.contacts.website,
            youtube: props.profile.contacts.youtube

        },
        onSubmit: async (values) => {
            const model = {
                fullName: values.fullName,
                aboutMe: values.aboutMe,
                lookingForAJob: true,
                lookingForAJobDescription: values.lookingForAJobDescription,
                userId: props.profile.userId,
                contacts: {
                    facebook: values.facebook,
                    github: values.github,
                    instagram: values.instagram,
                    mainLink: values.mainLink,
                    twitter: values.twitter,
                    vk: values.vk,
                    website: values.website,
                    youtube: values.youtube
                },
            }
            await dispatch(updateInformationProfileTC(model))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={style.formPersonalInformatiom}>
            <div className={style.InputBlock}>
                <div>
                    <TextField
                        name='fullName'
                        id='outlined-required'
                        label='Name'
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        name='aboutMe'
                        id='outlined-required'
                        label='About me'
                        value={formik.values.aboutMe}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        name='lookingForAJobDescription'
                        id='outlined-required'
                        label='Looking for a job description'
                        value={formik.values.lookingForAJobDescription}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-required'
                        label='Facebook'
                        name='facebook'
                        value={formik.values.facebook}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-required'
                        label='Instagram'
                        name='instagram'
                        value={formik.values.instagram}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-required'
                        label='VK'
                        name='vk'
                        value={formik.values.vk}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-required'
                        label='Website'
                        name='website'
                        value={formik.values.website}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-required'
                        label='Youtube'
                        name='youtube'
                        value={formik.values.youtube}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='outlined-required'
                        label='Github'
                        name='github'
                        value={formik.values.github}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <div className={style.buttonBlock}>
                <Button variant="outlined" type="submit">Save</Button>
                <Button onClick={() => props.setIsEditMode(false)} variant="outlined">Cancel</Button>
            </div>
            <SuccessSnackbars/>
        </form>
    )
}


export default ChangePersonalInformation;