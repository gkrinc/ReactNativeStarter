import actionTypes from '../actionTypes';

export default function user(state = [], action) {
    switch (action.type) {
        case actionTypes.USER.SET_USER:
            return {
                ...state,
                email: action.email,
                profilePic: action.profilePic,
                username: action.username,                
            };
        case actionTypes.USER.LOGOUT:
            return {
                email: '',
                profilePic: '',
                username: '',                
            };
        default:
            return state;
    }
}
