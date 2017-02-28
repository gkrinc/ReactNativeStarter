/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import LoginContainer from './containers/LoginContainer';
import UserProfileContainer from './containers/UserProfileContainer';

export default class ReactNativeStarter extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Raleway',
                                   fontSize: 24,
                                   fontWeight: 'bold',
                                   textAlign: 'center',
                                   color: '#ffffff',
                                   paddingTop: 24,
                                   paddingBottom: 32 }}>ReactNativeStarter</Text>
                    <LoginContainer />
                    <UserProfileContainer />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333334',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
