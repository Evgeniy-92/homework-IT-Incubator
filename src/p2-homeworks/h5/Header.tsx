import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemesType} from "../h12/bll/themeReducer";

function Header() {
    const [hiddenMenu, setHiddenMenu] = useState<boolean>(true)
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.currentTheme)
    const activeMenu = () => {
        setHiddenMenu(false)
    }
    const hideMenu = () => {
        setHiddenMenu(true)
    }
    const styleMenu = hiddenMenu ? s.menu : `${s.menu} ${s.active}`
    const darkItemStyle = theme === 'dark' ? `${s.item} ${s.itemWhite}` : s.item
    return (
        <div className={styleMenu}  onMouseLeave={hideMenu}>
            <NavLink className={darkItemStyle} activeClassName={s.activeItem} to={'/pre-Junior'}>pre-junior</NavLink>
            <NavLink className={darkItemStyle} activeClassName={s.activeItem} to={'/junior'}>junior</NavLink>
            <NavLink className={darkItemStyle} activeClassName={s.activeItem} to={'/junior+'}>junior+</NavLink>
            <span className={s.square} onClick={activeMenu}></span>
        </div>
    )
}

export default Header
