import logo from '../../assets/images/header-logo.png';
import style from './Header.module.css';
import React from 'react';


const Header = () => {

    return (
        <header class={style.header}>
            <div class={style.logo} >
                <img src={logo} alt='logo' />
            </div>
            <div class={style.login}>
                login
            </div>
        </header>
    )
}

export default Header;