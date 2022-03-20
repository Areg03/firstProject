import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_AVATAR = 'UPDATE_AVATAR';

let initialState = {
    profile: null,
    status: "----",
    avatar: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case UPDATE_AVATAR: {
            return {
                ...state,
                profile: {...state.profile},
                avatar: action.avatar,
            }
        }
        default: {
            return state;
        }
    }
}



const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatusAC = (status) => ({ type: SET_STATUS, status })
const updateStatusAC = (status) => ({ type: UPDATE_STATUS, status })
const updateAvatarAC = (avatar) => ({ type: UPDATE_AVATAR, avatar })

export const setUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.profile(userId)
    dispatch(setUserProfileAC(response.data))
}


export const updateAvatar = (avatar) => async (dispatch) => {
    let response = await profileAPI.updateAvatar(avatar)
    dispatch(updateAvatarAC(response.data.data.photos))
    
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(updateStatusAC(response.data))
    }
}

export default profileReducer;