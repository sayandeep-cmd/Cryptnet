import { actionauth } from "../Action/Actionconst";

const initials = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: "",
    error: "",
    message: "",
    token: "",
    auth:""
}

const Authreducer = (state = initials, action) => {
    switch (action.type) {
        case `${actionauth.USER_REGISTER}_REQUEST`:
            return {
                ...state
            };
        case `${actionauth.USER_REGISTER}_SUCCESSFUL`:
            return {
                ...state,
                message: action.payload.message
            };
        case `${actionauth.USER_REGISTER}_UNSUCCESSFUL`:
            return {
                ...state,
                error: action.payload.errorMsg
            };
        case `${actionauth.USER_LOGIN}_REQUEST`:
            return {
                ...state
            };
        case `${actionauth.USER_LOGIN}_SUCCESSFUL`:
            return state={
                ...state,
                auth:true,
                token:action.payload.token,
                message: action.payload.message
            };
        case `${actionauth.USER_LOGIN}_UNSUCCESSFUL`:
            return {
                ...state,
                error: action.payload.errorMsg
            };
        case `${actionauth.USER_LOGOUT}_REQUEST`:
            return {
                ...state
            };
        case `${actionauth.USER_LOGOUT}_SUCCESSFUL`:
            return state={
                ...state,
                auth:false,
                token:"",
                message: action.payload.message
            };
        case `${actionauth.USER_LOGOUT}_UNSUCCESSFUL`:
            return {
                ...state,
                error: action.payload.errorMsg
            };


        default: return state;
    }
}
export default Authreducer;