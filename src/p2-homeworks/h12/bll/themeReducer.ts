export type ThemesType = 'dark' | 'red' | 'some' | 'purple'

const initState = {
    currentTheme: 'purple' as ThemesType
};

export type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "CHANGE-THEME":
            return {
                ...state,
                currentTheme: action.newTheme
            }
        default:
            return state;
    }
};

export type ActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (newTheme: ThemesType) => {
    return {
        type: 'CHANGE-THEME',
        newTheme
    } as const
};