import React from 'react';
import style from "./Users.module.css";
import NoAvatar from "../../images/NoAvatar.png";
import {InitialStateUsersReducerType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import UsersPagination from "./Pagination/UsersPagination";
import {CircularProgress} from "@mui/material";


type UsersPropsType = {
    usersPage: InitialStateUsersReducerType
    onClickPage: (currentPage: number) => void
    addFollowTC: (userId: number) => void
    addUnfollowTC: (userId: number) => void
}

const Users = (props: UsersPropsType) => {


    const handlerFollow = (userId: number) => {
        props.addFollowTC(userId)
    }

    const handlerUnfollow = (userId: number) => {
        props.addUnfollowTC(userId)
    }

    if (props.usersPage.isLoading) {
        return <div>
             style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}
            <CircularProgress/>
        </div>
    }

    return (
        <div>

            {props.usersPage.isLoading ? <div>Loading...</div> : ''}
            <div>
                <UsersPagination totalCount={props.usersPage.totalCount}
                                 pageSize={props.usersPage.pageSize}
                                 currentPage={props.usersPage.currentPage}
                                 handlerCurrentPage={props.onClickPage}/>
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
    );
};

export default Users;