import React from 'react';
import NoAvatar from './../../images/NoAvatar.png'
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppRootState} from "../../redux/store";
import {followAC, InitialStateUsersReducerType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import axios from "axios";

type UsersPropsType = MapStateToPropsType & MapDispatchTyPropsType

const Users = (props: UsersPropsType) => {

    // const data = [
    //     {id: 1, followed: false, fullName: 'Alexander', status: 'I am student of Incubator'},
    //     {id: 2, followed: false, fullName: 'Nastya', status: 'I am nanny'},
    //     {id: 3, followed: true, fullName: 'Ivan', status: 'I am mushroomer'}
    // ]

    const getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {props.usersPage.users.map(user => <div key={user.id}>
                <div>
                    <img src={user.photos.large ? user.photos.large : NoAvatar}/>
                </div>
                    <div>
                        <span>Name: </span><span>{user.name}</span>
                    </div>
                    <div>
                        <span>Status: </span><span>{user.status}</span>
                    </div>
                    {user.followed
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
            )}
            <button onClick={getUsers}>Set users</button>
        </div>
    )
}

type MapStateToPropsType = {
    usersPage: InitialStateUsersReducerType
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

type MapDispatchTyPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (data: UserType[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (data: UserType[]) => dispatch(setUsersAC(data))

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

