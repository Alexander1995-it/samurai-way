import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar__block}>
            <div className={style.navbar__content}>
                <NavLink activeClassName={style.navbar__activeLink} className={style.navbar__link} to='/profile'>
                    <div className={style.navbar__profile + ' ' + style.navbar__text}>Profile</div>
                </NavLink>
                <NavLink activeClassName={style.navbar__activeLink} className={style.navbar__link} to='/frends'>
                    <div className={style.navbar__profile + ' ' + style.navbar__text}>Frends</div>
                </NavLink>
                <NavLink activeClassName={style.navbar__activeLink} className={style.navbar__link} to='users'>
                    <div className={style.navbar__users + ' ' + style.navbar__text}>Users</div>
                </NavLink>
                <NavLink activeClassName={style.navbar__activeLink} className={style.navbar__link} to='/dialogs'>
                    <div className={style.navbar__dialogs + ' ' + style.navbar__text}>Dialogs</div>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;