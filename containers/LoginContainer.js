import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';
import Login from '../components/Login/Login';

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

const mapDispatchToProps = (
    dispatch
) => {
    return bindActionCreators(actionCreators, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    let {
        setLoginLoading,
        setLoginPassword,
        setLoginUsername,
        login,
    } = dispatchProps;

    onLoginSubmit = () => {
        console.log('onLoginSubmit');
        setLoginLoading(true);

        login(stateProps.username, stateProps.password);
    };

    onPasswordChange = (event) => {
        console.log('onPasswordChange');
        setLoginPassword(event.target.value);
    };

    onUsernameChange = (event) => {
        console.log('onUsernameChange');
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
