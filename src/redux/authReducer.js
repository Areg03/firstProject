import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default: {
            return state;
        }
    }
}



const setAuthUserDataSuccess = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.auth()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserDataSuccess(id, email, login));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataSuccess(null, null, null, false));
    }
}

export default authReducer;