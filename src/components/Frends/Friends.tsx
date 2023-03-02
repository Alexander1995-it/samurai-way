import React, {useEffect} from 'react';
import Users from "../Users/Users";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getUsersTC} from "../../redux/usersReducer";

export const Friends = () => {

    const usersPage = useAppSelector(state => state.usersPage)
    const statusApp = useAppSelector(state => state.app.statusApp)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTC({pageSize: usersPage.pageSize, currentPage: usersPage.currentPage, searchName: '', friend: true}))
    }, [])

    return <Users usersPage={usersPage} statusApp={statusApp} isFriends={true}/>

};

