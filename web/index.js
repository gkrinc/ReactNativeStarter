import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import LoginContainer from '../containers/LoginContainer';
import UserProfileContainer from '../containers/UserProfileContainer';

const Root = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <div style={{ position: 'absolute',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(#333334, #1C1C1C)' }}>
                    <h1 style={{ fontFamily: 'Raleway',
                                 fontSize: '24px',
                                 fontWeight: 'bold',
                                 textAlign: 'center',
                                 color: '#ffffff',
                                 padding: '24px 0 32px 0' }}>ReactNativeStarter</h1>
                    <LoginContainer />
                    <UserProfileContainer />
                </div>
            </Provider>
        );
    }
});

ReactDOM.render(<Root/>, document.getElementById('root'));
