import axios from 'axios'
import { actionauth } from './Actionconst';

export const signUp = (uservalue) => {
    return async (dispatch) => {
        dispatch({ type: `${actionauth.USER_REGISTER}_REQUEST` });
        let appenddata = new FormData()
        appenddata.append("first_name", uservalue.first_name)
        appenddata.append("last_name", uservalue.last_name)
        appenddata.append("email", uservalue.email)
        appenddata.append("password", uservalue.password)
        appenddata.append("profile_pic", uservalue.profile_pic)

        axios.post('https://wtsacademy.dedicateddevelopers.us/api/user/signup', appenddata, { headers: { "Content-Type": "application/x-www-form-urlencoded", "Access-Control-Allow-Origin": "*" } })
            .then((res) => {
                console.log("Response for reg:", res.data)
                dispatch({
                    type: `${actionauth.USER_REGISTER}_SUCCESSFUL`,
                    payload: { message: res.data.message, data: res.data }

                })
            })
            .catch((err) => {
                dispatch({
                    type: `${actionauth.USER_REGISTER}_UNSUCCESSFUL`,
                    payload: { errorMsg: "Data Cannot be Registered, " + { err } }
                })
            })
    }

}
export const signIn = (user) => {
    return async (dispatch) => {
        dispatch({ type: `${actionauth.USER_LOGIN}_REQUEST` });
        let loginappend = new FormData()
        loginappend.append("email", user.email)
        loginappend.append("password", user.password)
        window.sessionStorage.setItem("token", user.token)
        // window.sessionStorage.setItem("username", user.email)
        axios.post('https://wtsacademy.dedicateddevelopers.us/api/user/signin', user)
            .then((res) => {
                dispatch({
                    type: `${actionauth.USER_LOGIN}_SUCCESSFUL`,
                    payload: { message: res.data.message, data: res.data, token: res.data.token }
                })
            })
            .catch((err) => {
                dispatch({
                    type: `${actionauth.USER_LOGIN}_UNSUCCESSFUL`,
                    payload: { errorMsg: "Cannot Login , " + { err } }
                })
            })
    }
}
export const signOut = () => {
    return async (dispatch) => {
        dispatch({ type: `${actionauth.USER_LOGOUT}_REQUEST` });
        if (sessionStorage.getItem('token') !== "") {
            sessionStorage.clear();
            dispatch({
                type: `${actionauth.USER_LOGOUT}_SUCCESSFUL`,
                payload: { message: "logout Successful" }
            })
        } else {
            dispatch({
                type: `${actionauth.USER_LOGOUT}_UNSUCCESSFUL`,
                payload: { errorrMsg: "Logout failed" }
            })
        }
    }
}