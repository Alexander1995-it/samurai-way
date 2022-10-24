import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppRootState} from "../../redux/store";
import {
    follow,
    InitialStateUsersReducerType,
    setCurrentPage, setLoading, setTotalCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchTyPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.setLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`, {withCredentials: true})
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.setLoading(false)
            })
    }

    onClickPage = (currentPage: number) => {
        this.props.setLoading(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`, {withCredentials: true})
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setLoading(false)
            })
    }
    render () {

        return <Users
            usersPage={this.props.usersPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setCurrentPage={this.props.setCurrentPage}
            onClickPage={this.onClickPage}
        />
    }
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
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setLoading: (loading: boolean) => void
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setLoading
})(UsersContainer)

