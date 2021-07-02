const Action = 'SET_AUTH'
const defaultState = {
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case Action:
            return {
                ...state,
                isAuth: action.payload
            }
        default:    
            return state
    }
}

export const setAuth = (isAuth) => ({type: Action, payload: isAuth})