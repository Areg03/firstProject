import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "47b55aef-e1c5-4919-be3a-5c8305ca4518",
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    toggleFollow(userId) {
        if (userId.followed === false) {
            return instance.post(`follow/${userId}`)
        }       
        return instance.delete(`follow/${userId}`)
    },
    auth() {
        console.warn('Obselete method. Please change usersAPI to authAPI')
        return authAPI.auth()

    },
    profile(userId) {
        console.warn('Obselete method. Please change usersAPI to profileAPI')
        return profileAPI.profile(userId)
    }
}

export const profileAPI = {
    profile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    },
    updateAvatar(photo) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
}

export const authAPI = {
    auth() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    },
}


