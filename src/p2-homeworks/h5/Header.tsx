import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.head}>

            <div className={s.main}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.link}>PreJunior</NavLink>
            </div>
            <div className={s.main}>
                <NavLink to={PATH.JUNIOR} className={s.link}>Junior</NavLink>
            </div>
            <div className={s.main}>
                <NavLink to={PATH.MIDDLE} className={s.link}>Middle</NavLink>
            </div>

            <span className={s.block}> Levels </span>


        </div>
    )
}

export default Header
