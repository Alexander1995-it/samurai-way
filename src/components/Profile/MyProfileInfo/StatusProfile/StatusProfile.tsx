import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import style from './StatusProfile.module.css'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import iconStatus from '../../../../common/icon/forStatus.svg'

export type StatusProfileType = {
    status: string
    updateStatusProfileTC: (status: string) => void
    params: string
}

export const StatusProfile = (props: StatusProfileType) => {

    const [localStatus, setLocalStatus] = useState(props.status)
    const [isEditMode, setEditMode] = useState(false)

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const editActiveHandler = () => {
        setEditMode(false)
        props.updateStatusProfileTC(localStatus)
    }

    const editDeactiveHandler = () => {
        setEditMode(true)

    }


    const changeLocalState = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div className={style.status__block}>
            <div className={style.status__label}><img src={iconStatus} width='35px' height='35px' alt=""/></div>
            <div>
                {isEditMode
                    ? <TextField id="standard-basic" variant="standard"
                                 autoFocus={true} onBlur={() => editActiveHandler()}
                                 value={localStatus} onChange={(e) => changeLocalState(e)}/>
                    : <span className={style.status__text}>{props.status}</span>}
            </div>
            <div className={style.editStatus}>
                {isEditMode
                    ? <IconButton sx={{color: 'black'}} component="span">
                        <FileDownloadDoneIcon sx={{fontSize: '30px'}}/>
                    </IconButton>
                    : !props.params && <IconButton onClick={() => editDeactiveHandler()} sx={{color: 'black'}} component="span">
                    <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>
                }
            </div>
        </div>
    )
}
