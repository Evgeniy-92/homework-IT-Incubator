import React from 'react'
import s from "./Message.module.css"

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.messageWrapper}>
            <img src={props.avatar} alt="avatar"/>
            <div className={s.message}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.block}>
                    <div className={s.textMessage}>{props.message}</div>
                    <div className={s.timeMessage}>{props.time}</div>
                </div>

            </div>
        </div>
    )
}

export default Message
