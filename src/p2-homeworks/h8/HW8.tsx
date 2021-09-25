import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './bll/homeWorkReducer.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState <Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={s.peopleWrapper}  key={p._id}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const check = () => setPeople(homeWorkReducer(initialPeople, checkAC()))




    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div style={{marginLeft: '10px'}}>
                {finalPeople}
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check}> check 18</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
