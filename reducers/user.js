import actionTypes from '../actionTypes';

export default function user(state = [], action) {
    switch (action.type) {
        case actionTypes.USER.SET_USER:
            return {
                ...state,
                username: action.username,
                profilePic: action.profilePic,
            };
        case actionTypes.USER.LOGOUT:
            return {
                username: '',
                profilePic: '',
            };
        default:
            return state;
    }
}
