const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsAppReducerType) => {
    switch (action.type) {
        case 'SET_INITIALIZED_APP': {
            return {
                ...state,
                initialized: true

            }
        }
        default:
            return state

    }
}

//typesActions
export type ActionsAppReducerType = ReturnType<typeof initializedApp>

//actions
export const initializedApp = () => ({type: 'SET_INITIALIZED_APP'}) as const

