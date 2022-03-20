import { createSelector } from "reselect";

const getUsersSelector = (state) => {
   
        return state.usersPage.users;  
}

export const getUsersSelectorFilter = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getTotalCount = (state) => {
   
    return state.usersPage.totalUsersCount;  
}

export const getPageSize = (state) => {
   
    return state.usersPage.pageSize;  
}

export const getCurrentPage = (state) => {
   
    return state.usersPage.currentPage;  
}

export const getFetching = (state) => {
   
    return state.usersPage.toggleIsFetching;  
}

export const getFollowing = (state) => {
   
    return state.usersPage.isToggleFollowing;  
}