import React from 'react';
// http://loading.io/
import spinner from '../../assets/images/rolling.gif';

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
            <div style={{ fontFamily: 'Raleway', padding: '0 16px' }}>                
                <div style={{ marginBottom: '16px', textAlign: 'center' }}>
                    <input type={'text'}
                           placeholder={'Username'}
                           style={{ fontSize: '14px', padding: '4px', width: '80%' }}
                           onChange={onUsernameChange}
                           value={username} />
                </div>
                <div style={{ marginBottom: '16px', textAlign: 'center' }}>
                    <input type={'password'}
                           placeholder={'Password'}
                           style={{ fontSize: '14px', padding: '4px', width: '80%' }}
                           onChange={onPasswordChange}
                           value={password} />
                </div>
                <div style={{ margin: 'auto',
                              textAlign: 'center',
                              position: 'relative',
                              width: '220px' }}>
                    <img src={spinner} style={{ display: loading ? 'block' : 'none', position: 'absolute', top: '6px', right: '0px' }} />
                    <button onClick={onLoginSubmit}
                            style={{ backgroundColor: '#766E5C',
                                     color: '#ffffff',
                                     padding: '8px 0',
                                     width: '160px',
                                     border: 'none',
                                     borderRadius: '4px',
                                     fontFamily: 'Raleway',
                                     fontSize: '14px' }}>LOGIN</button>
                </div>
            </div>
        );
    }
});
