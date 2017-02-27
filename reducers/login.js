import actionTypes from '../actionTypes';

export default function login(state = [], action) {
    switch (action.type) {
        case actionTypes.LOGIN.SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case actionTypes.LOGIN.SET_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case actionTypes.LOGIN.SET_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        case actionTypes.USER.LOGOUT:
            return {
                loading: false,
                username: '',
                password: '',
            };
        default:
            return state;
    }
}
