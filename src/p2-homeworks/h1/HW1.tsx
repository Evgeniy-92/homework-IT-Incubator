import React from 'react'
import Message, {messageDataType} from "./Message";

const messageData: messageDataType = {
    avatar: 'https://delai-vibor.com/wp-content/uploads/2018/01/Web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82-2.jpg',
    name: 'Yauheni',
    message: 'Я сейчас учу JavaScript и React ',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div style={{paddingLeft: '15px'}}>
                homeworks 1

                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>

            <hr/>

        </div>
    )
}

export default HW1
