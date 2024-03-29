import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString() // fix with date

    const timeStyle = show ? s.timeBlock : `${s.timeBlock} ${s.timeMargin}`
    return (
        <div className={s.wrapper}>
            <div
                className={timeStyle}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.dateBlock}>
                    {stringDate}
                </div>
            )}
            <div className={s.buttonBlock}>
                <SuperButton className={s.buttonStyle} onClick={start}>start</SuperButton>
                <SuperButton className={s.buttonStyle} onClick={stop}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
function newDate(): Date | (() => Date) {
    throw new Error('Function not implemented.')
}

