import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import style from './StatusProfile.module.css'
import CancelIcon from '@mui/icons-material/Cancel';

export type StatusProfileType = {
    status: string
    updateStatusProfileTC: (status: string) => void
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

    const cancelHandler = () => {

    }

    const changeLocalState = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div className={style.status__block}>
            <div>
                <span className={style.status__label}>Status: </span>
                {isEditMode
                    ? <TextField id="standard-basic" variant="standard"
                                 autoFocus={true} onBlur={() => editActiveHandler()}
                                 value={localStatus} onChange={(e) => changeLocalState(e)}/>
                    : <span className={style.status__text}>{props.status}</span>}
            </div>
            <div className={style.editStatus}>
                {isEditMode
                    ? <IconButton onClick={() => cancelHandler()} sx={{color: 'black'}} component="span">
                        <CancelIcon sx={{fontSize: '30px'}}/>
                    </IconButton>
                    : <IconButton onClick={() => editDeactiveHandler()} sx={{color: 'black'}} component="span">
                        <EditIcon sx={{fontSize: '20px'}}/>
                    </IconButton>
                }

            </div>
        </div>
    )
}
