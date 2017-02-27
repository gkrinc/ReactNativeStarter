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
                <div>
                    <h1>ReactNativeStater</h1>
                    <LoginContainer />
                    <UserProfileContainer />
                </div>
            </Provider>
        );
    }
});

ReactDOM.render(<Root/>, document.getElementById('root'));
