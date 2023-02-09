import React, {useEffect, useState} from 'react';
import style from "./Users.module.css";
import NoAvatar from "../../images/NoAvatar.png";
import {InitialStateUsersReducerType} from "../../redux/usersReducer";
import {NavLink, useHistory, useParams} from "react-router-dom";
import UsersPagination from "./Pagination/UsersPagination";
import {CircularProgress, TextField} from "@mui/material";
import {StatusAppType} from "../../redux/appReducer";
import {useDebounce} from "../../common/hooks/hooks";


type UsersPropsType = {
    usersPage: InitialStateUsersReducerType
    onClickPage: (currentPage: number, searchName: string) => void
    addFollowTC: (userId: number) => void
    addUnfollowTC: (userId: number) => void
    statusApp: StatusAppType
}

const Users = (props: UsersPropsType) => {

    const [search, setSearch] = useState('')
    const history = useHistory()
    const debouncedValue = useDebounce<string>(search, 700)

    useEffect(() => {
        props.onClickPage(1, search)
        history.push({
            pathname: '/users',
            search: `?term=${search}`
        })
    }, [debouncedValue])

    const handlerFollow = (userId: number) => {
        props.addFollowTC(userId)
    }

    const handlerUnfollow = (userId: number) => {
        props.addUnfollowTC(userId)
    }

    if (props.statusApp === 'loading') {
        return <div style={{display: 'flex', height: '70%', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className={style.usersPageBlock}>
            <div className={style.paginationAndSearchBlock}>
                <div className={style.fieldSearch}>
                    <TextField autoFocus={true} value={search} onChange={(e) => setSearch(e.currentTarget.value)} id="filled-basic"
                               label="Search" variant="filled"/>
                </div>
                <div>
                    <UsersPagination totalCount={props.usersPage.totalCount}
                                     pageSize={props.usersPage.pageSize}
                                     currentPage={props.usersPage.currentPage}
                                     handlerCurrentPage={props.onClickPage}/>
                </div>
            </div>

            {props.usersPage.users.map(user => <div key={user.id}>
                    <NavLink to={'/profile' + user.id}>
                        <div>
                            <img src={user.photos.large ? user.photos.large : NoAvatar}/>
                        </div>
                    </NavLink>
                    <div>
                        <span>Name: </span><span>{user.name}</span>
                    </div>
                    <div>
                        <span>Status: </span><span>{user.status}</span>
                    </div>
                    {user.followed
                        ? <button disabled={props.usersPage.followingInProgress.some(u => u === user.id)}
                                  onClick={() => handlerUnfollow(user.id)}>Unfollow</button>
                        : <button disabled={props.usersPage.followingInProgress.some(u => u === user.id)}
                                  onClick={() => handlerFollow(user.id)}>Follow</button>}
                </div>
            )}
        </div>
    )
}

export default Users;