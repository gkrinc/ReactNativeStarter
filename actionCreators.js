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

export function setUser(username, email, profilePic) {
    return {
        type: actionTypes.USER.SET_USER,
        email,
        profilePic,
        username,        
    };
}

export function login(username, password) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(setUser('SomethingOn', 'greg@somethingon.ca', 'https://avatars2.githubusercontent.com/u/2718382?v=3&u=bf0e35a9396143fdfc7bab4e6f3c5b53941fcd2f&s=400'));
        }, 2000); /* simulate API call loading time */
    }
}

export function logout() {
    return {
        type: actionTypes.USER.LOGOUT,
    };
}
