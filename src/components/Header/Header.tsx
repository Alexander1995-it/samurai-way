import React from 'react';
import style from './Header.module.css'
import {connect} from "react-redux";
import {AppRootState} from "../../redux/store";
import {InitialStateAuthReducerType, setAuthMeTC} from "../../redux/authReducer";

type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setAuthMeTC()
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
    setAuthMeTC: () => void
}

type MapStateToPropsType = {
    auth: InitialStateAuthReducerType
}
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
      auth: state.auth
  }
}


export default connect (mapStateToProps, {
    setAuthMeTC
}) (HeaderContainer)