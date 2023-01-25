import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {
    addIdInFollowingProgress, addFollowTC,
    follow, getUsersTC,
    InitialStateUsersReducerType,
    setCurrentPage, setLoading, setTotalCount,
    setUsers,
    unfollow,
    UserType, addUnfollowTC
} from "../../redux/usersReducer";
import Users from "./Users";


type UsersContainerPropsType = MapStateToPropsType & MapDispatchTyPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.usersPage.pageSize, this.props.usersPage.currentPage)
    }

    onClickPage = (currentPage: number) => {
        this.props.getUsersTC(this.props.usersPage.pageSize, currentPage)
    }

    render() {

        return <Users
            usersPage={this.props.usersPage}
            onClickPage={this.onClickPage}
            addFollowTC={this.props.addFollowTC}
            addUnfollowTC={this.props.addUnfollowTC}
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
    addIdInFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (pageSize: number, currentPage: number) => void
    addFollowTC: (userId: number) => void
    addUnfollowTC: (userId: number) => void
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setLoading,
    addIdInFollowingProgress,
    getUsersTC,
    addFollowTC,
    addUnfollowTC
})(UsersContainer)

