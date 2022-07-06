import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header__block}>
            <div className={style.header__wrapper}>
                <div className={style.header__title}> social network Incubator</div>
                <div className={style.header__login}>Login</div>
            </div>

        </div>
    );
};

export default Header;