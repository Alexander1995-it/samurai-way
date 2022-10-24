import React from 'react';
import style from "./Users.module.css";
import NoAvatar from "../../images/NoAvatar.png";
import {InitialStateUsersReducerType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    usersPage: InitialStateUsersReducerType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    onClickPage: (currentPage: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const handlerFollow = (userId: number) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {withCredentials: true, headers: {
                    'API-KEY': 'da9cb287-f4c3-4451-9409-0a992045ae44'
                }})
            .then (response => {
                return response
            })
        props.follow(userId)
    }

    const handlerUnfollow = (userId: number) => {
        props.unfollow(userId)
    }
    return (
        <div>

            {props.usersPage.isLoading ? <div>Loading...</div> : ''}
            <div>
                {pages.map((el, index) => <span key={index} onClick={() => props.onClickPage(el)} className={props.usersPage.currentPage === el ? style.currentPage :'' + style.pageNumber}>{el}</span>)}
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
                        ? <button onClick={() => handlerUnfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => handlerFollow(user.id)}>Follow</button>}
                </div>
            )}
        </div>
    );
};

export default Users;