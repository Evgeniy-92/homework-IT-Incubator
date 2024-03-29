import React from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from '../../HW8';

let initialState: Array<UserType> // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC())

    console.log(newState)
    expect(newState[0].age).toBe(66)
    expect(newState[1].age).toBe(55)
    expect(newState[2].age).toBe(44)
    expect(newState[3].age).toBe(40)
    expect(newState[4].age).toBe(16)
    expect(newState[5].age).toBe(3)

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC())

    expect(newState[0].age).toBe(3)
    expect(newState[1].age).toBe(16)
    expect(newState[2].age).toBe(40)
    expect(newState[3].age).toBe(44)
    expect(newState[4].age).toBe(55)
    expect(newState[5].age).toBe(66)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC())

    expect(newState.length).toBe(4)
    expect(newState).toEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ])
})
