import React from 'react'
import Message, {messageDataType} from "./Message";

const messageData: messageDataType = {
    avatar: 'https://delai-vibor.com/wp-content/uploads/2018/01/Web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82-2.jpg',
    name: 'Yauheni',
    message: 'Я сейчас учу JavaScript и React',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
