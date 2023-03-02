import React, {useEffect} from 'react';
import {getUsersTC} from "../../redux/usersReducer";
import Users from "./Users";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";


export const UsersContainer = () => {
    const dispatch = useAppDispatch()

    const usersPage = useAppSelector(state => state.usersPage)
    const statusApp = useAppSelector(state => state.app.statusApp)


    useEffect(() => {
          dispatch(getUsersTC({pageSize: usersPage.pageSize, currentPage: usersPage.currentPage, searchName: ''}))
    }, [])

    return <Users
        usersPage={usersPage}
        statusApp={statusApp}
    />

}








