import React from 'react';
import Users from "../Users/Users";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";

const Frends = () => {
    const usersPage = useAppSelector(state => state.usersPage)
    const statusApp = useAppSelector(state => state.app.statusApp)
    const dispatch = useAppDispatch()
    const addFollowTC = (userId: number) => {
        // dispatch(addFollowTC(userId))
    }
    const addUnfollowTC = (userId: number) => {
        // dispatch(addUnfollowTC(userId))
    }
    // addFollowTC={this.props.addFollowTC}
    // addUnfollowTC={this.props.addUnfollowTC}
    return (
        <div>
            <Users usersPage={usersPage} statusApp={statusApp}/>
        </div>
    );
};

export default Frends;