const initState = {
    loadingValue: false
}
export type InitialStateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SHOW-LOADING': {
            let copyState = {...state}
            copyState.loadingValue = true
            return copyState
        }
        case 'HIDE-LOADING': {
            let copyState = {...state}
            copyState.loadingValue = false
            return copyState
        }
        default: return state
    }
}

type ActionType = ReturnType<typeof showLoadingAC> | ReturnType<typeof hideLoadingAC>
export const showLoadingAC = () => {
    return {
        type: 'SHOW-LOADING',
    }
}
export const hideLoadingAC = () => {
    return {
        type: 'HIDE-LOADING',
    }
}