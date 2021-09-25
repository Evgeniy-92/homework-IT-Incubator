import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {hideLoadingAC, InitialStateType, showLoadingAC} from './bll/loadingReducer';
import s from './HW10.module.css'

function HW10() {
    const loading = useSelector<AppStoreType, InitialStateType>(store => store.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(showLoadingAC())
        setTimeout(() => {
            dispatch(hideLoadingAC())
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.loadingValue
                ? (
                    <div className={s.load}>
                        <div className={s.ring}></div>
                    </div>
                ) : (
                    <div className={s.buttonWrapper}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
