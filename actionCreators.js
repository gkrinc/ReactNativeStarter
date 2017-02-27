import actionTypes from './actionTypes';

export function setLoginLoading(loading) {
    return {
        type: actionTypes.LOGIN.SET_LOADING,
        loading,
    };
}

export function setLoginUsername(username) {
    return {
        type: actionTypes.LOGIN.SET_USERNAME,
        username,
    };
}

export function setLoginPassword(password) {
    return {
        type: actionTypes.LOGIN.SET_PASSWORD,
        password,
    };
}

export function setUser(username, profilePic) {
    return {
        type: actionTypes.USER.SET_USER,
        username,
        profilePic,
    };
}

export function login(username, password) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(setUser('SomethingOn', 'https://pbs.twimg.com/profile_images/428238569077878785/7PZsX4yA_400x400.png'));
        }, 2000); /* simulate API call loading time */
    }
}

export function logout() {
    return {
        type: actionTypes.USER.LOGOUT,
    };
}
