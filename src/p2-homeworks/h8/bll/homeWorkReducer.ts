import {UserType} from '../HW8';

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'SORT-UP': {
            let copy = [...state]
           return copy.sort((a, b) => a.age < b.age ? 1 : -1)
        }
        case 'SORT-DOWN': {
            let copy = [...state]

            return copy.sort((a, b) => a.age > b.age ? 1 : -1)
        }
        case 'CHECK': {
            let copy = [...state]

            return copy.filter(p => p.age > 18)
        }
        default: return state
    }
}

type ActionType = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof checkAC>


export const sortUpAC = () => {
    return {
        type: 'SORT-UP',
    }
}
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
    }
}
export const checkAC = () => {
    return {
        type: 'CHECK',
    }
}