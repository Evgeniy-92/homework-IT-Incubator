import React from 'react'
import style from "../../../p2-homeworks/h12/HW12.module.css";
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from '../../../p2-homeworks/h3/HW3';
import HW4 from '../../../p2-homeworks/h4/HW4';
import HW5 from '../../../p2-homeworks/h5/HW5';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {ThemesType} from "../../../p2-homeworks/h12/bll/themeReducer";

function App() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.currentTheme)

    return (
        <div className={style[theme]}>
            <div>react homeworks:</div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>

        </div>
    )
}

export default App
