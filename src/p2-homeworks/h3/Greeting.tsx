import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler, addUser, error, totalUsers}
) => {
    const inputClass = error === "Error, incorrect name" ? s.error : ""

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <span>{error}</span>
            <button onClick={addUser} >add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
