import React from 'react';
import style from './Header.module.css'
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import axios from "axios";
import {getAuth, InitialStateAuthReducerType} from "../../redux/auth-reducer";

type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get ('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then (response => {
                if (response.data.resultCode === 0) {
                    this.props.getAuth (response.data.data)
                }
            })

    }

    render() {
        return <Header auth={this.props.auth}/>;
    }
}

type HeaderPropsType = {
    auth: InitialStateAuthReducerType
}

const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.header__block}>
            <div className={style.header__wrapper}>
                <div className={style.header__title}> social network Incubator</div>
                {props.auth.isAuth
                    ? <div className={style.header__login}>{props.auth.login}</div>
                    : <div className={style.header__login}>Login</div>
                }

            </div>

        </div>
    );
};

type MapDispatchToPropsType = {
    getAuth: (payload: any) => void
}

type MapStateToPropsType = {
    auth: InitialStateAuthReducerType
}
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
      auth: state.auth
  }
}


export default connect (mapStateToProps, {getAuth}) (HeaderContainer)