import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';
import UserProfile from '../components/UserProfile/UserProfile';

const mapStateToProps = (
    state
) => {
    return {
        email: state.user.email,
        profilePic: state.user.profilePic,
        username: state.user.username,
    };
};

const mapDispatchToProps = (
    dispatch
) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
