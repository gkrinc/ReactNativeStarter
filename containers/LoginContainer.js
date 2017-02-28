// Presentational Components vs Containers - http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';
import Login from '../components/Login/Login';

// Map state (redux store values) to component props
const mapStateToProps = (
    state
) => {
    return {
        showLoginForm: state.user.username ? false : true,
        loading: state.login.loading,
        username: state.login.username,
        password: state.login.password,
    };
};

// Bind all action creators to component props. The component that this container connects to (Login) will have access
// to all of the action creator functions as props
const mapDispatchToProps = (
    dispatch
) => {
    return bindActionCreators(actionCreators, dispatch);
};

// Merge props is where we write our business/app logic functions and pass them to the connected component as props
const mergeProps = (stateProps, dispatchProps, ownProps) => {

    let {
        setLoginLoading,
        setLoginPassword,
        setLoginUsername,
        login,
    } = dispatchProps;

    onLoginSubmit = () => {
        setLoginLoading(true);

        login(stateProps.username, stateProps.password);
    };

    onPasswordChange = (event) => {
        setLoginPassword(event.target.value);
    };

    onUsernameChange = (event) => {
        setLoginUsername(event.target.value);
    };    

    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        onLoginSubmit,
        onPasswordChange,
        onUsernameChange,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(Login);
