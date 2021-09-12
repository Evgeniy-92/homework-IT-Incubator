import React, {MouseEvent, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    const [hiddenMenu, setHiddenMenu] = useState<boolean>(true)

    const activeMenu = () => {
        setHiddenMenu(false)
    }
    const hideMenu = () => {
        setHiddenMenu(true)
    }
    const styleMenu = hiddenMenu ? s.menu : `${s.menu} ${s.active}`
    return (
        <div className={styleMenu}  onMouseLeave={hideMenu}>
            <NavLink className={s.item} activeClassName={s.activeItem} to={'/pre-Junior'}>pre-junior</NavLink>
            <NavLink className={s.item} activeClassName={s.activeItem} to={'/junior'}>junior</NavLink>
            <NavLink className={s.item} activeClassName={s.activeItem} to={'/junior+'}>junior+</NavLink>
            <span className={s.square} onMouseOver={activeMenu}></span>
        </div>
    )
}

export default Header
