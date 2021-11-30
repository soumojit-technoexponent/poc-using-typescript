type CurrentState = {
    isLoggedIn: boolean,
    currentuser: string
}

type CurrentAction = {
    type: string,
    payload: string
}

const initialState = {
    isLoggedIn: false,
    currentuser: ''
}

const loginReducer = (state: CurrentState = initialState, action: CurrentAction) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isLoggedIn: true,
                currentuser: action.payload

            }
        case 'LOGIN_FAILURE':
            return {
                isLoggedIn: false,
                currentuser: ''
            }
        case 'LOGOUT_SUCCESS':
            return {
                isLoggedIn: false
            }
        default: return state
    }
}

export default loginReducer;