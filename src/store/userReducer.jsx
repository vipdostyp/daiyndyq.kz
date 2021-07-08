const SET_AUTH = 'SET_AUTH'
const SET_USER = 'SET_USER'

const defaultState = {
    isAuth: false,
    data: {
        username: 'John Doe'
    }
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case SET_USER:
            return {
                ...state,
                data: action.payload
            }
        default:    
            return state
    }
}

export const setAuth = (data) => ({type: SET_AUTH, payload: data})
export const setUser = (data) => ({type: SET_USER, payload: data})