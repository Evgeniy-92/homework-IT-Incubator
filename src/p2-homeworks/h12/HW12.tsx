import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemesType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'purple'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.currentTheme)
    const dispatch = useDispatch()
    const onChangeCallback = (newTheme: ThemesType) => {
        dispatch(changeThemeC(newTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <div style={{paddingLeft: '15px'}}>
                <span>
                homeworks 12
                </span>
                <div>
                    <SuperSelect
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}
                    />
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
