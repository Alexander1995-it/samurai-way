export type StatusAppType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    initialized: false,
    statusApp: 'idle' as StatusAppType
}

type StateAppReducerType = typeof initialState
export const appReducer = (state: StateAppReducerType = initialState, action: ActionsAppReducerType): StateAppReducerType => {
    switch (action.type) {
        case 'SET_INITIALIZED_APP': {
            return {
                ...state,
                initialized: true
            }
        }
        case 'SET_APP_STATUS': {
            return {
                ...state,
                statusApp: action.status
            }
        }
        default:
            return state
    }
}

//typesActions
export type ActionsAppReducerType =
    | ReturnType<typeof initializedApp>
    | ReturnType<typeof setAppStatus>

//actions
export const initializedApp = () => ({type: 'SET_INITIALIZED_APP'}) as const
export const setAppStatus = (status: StatusAppType) => ({type: 'SET_APP_STATUS', status}) as const
