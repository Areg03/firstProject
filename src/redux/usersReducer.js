import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWNIG_PROCESS';

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
    isToggleFollowing: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        }
        case TOGGLE_ISFETCHING: {
            return {
                ...state,
                toggleIsFetching: action.isFetching,
            }
        }
        case TOGGLE_FOLLOWING_PROCESS: {
            return {
                ...state,
                isToggleFollowing: action.isFetching
                    ? [...state.isToggleFollowing, action.userId]
                    : state.isToggleFollowing.filter(id => id !== action.userId),
            }
        }
        default:
            return state;
    }
}

const toggleFollowSuccess = (userId) => ({ type: TOGGLE_FOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching });
const toggleFollowingProcess = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROCESS, isFetching, userId })
const setPage = (currentPage) => ({ type: SET_PAGE, currentPage });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.data.items));
    dispatch(setTotalCount(data.data.totalCount));
    dispatch(setPage(currentPage))
}

export const toggleFollow = (userId) => async (dispatch) => {

    dispatch(toggleFollowingProcess(true, userId));
    let response = await usersAPI.toggleFollow(userId)
    if (response.data.resultCode === 1) {
        dispatch(toggleFollowSuccess(userId));
    }
    dispatch(toggleFollowingProcess(false, userId));
}

export default usersReducer;

