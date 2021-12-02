import { Dispatch } from "redux";

export const loginAction = (data: { login_email: string; login_password: string; }) => {
    if (data.login_email === "soumo@gmail.com" && data.login_password === "1234")
        return (dispatch : Dispatch) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data.login_email
            })
            console.log("Login Success");
        }
    else {
        return (dispatch: Dispatch) => {
            dispatch({
                type: 'LOGIN_FAILURE'
            })
            console.log("Login Failure");
        }
    }
}

export const logoutAction = () => {
    return (dispatch : Dispatch) => {
        dispatch({
            type: 'LOGOUT_SUCCESS',
        })
        console.log("Logout Success");
    }
}