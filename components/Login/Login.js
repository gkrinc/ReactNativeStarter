import React from 'react';

export default React.createClass({

    render() {

        let  {
            onLoginSubmit,
            onPasswordChange,
            onUsernameChange,
            loading,
            password,
            showLoginForm,
            username,
        } = this.props;

        if (!showLoginForm) return null;

        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <input type={'text'} placeholder={'Username'} style={{ display: 'block' }} onChange={onUsernameChange} value={username} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <input type={'password'} placeholder={'Password'} style={{ display: 'block' }} onChange={onPasswordChange} value={password} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <button onClick={onLoginSubmit}>Login</button>
                </div>
            </div>
        );
    }
});
