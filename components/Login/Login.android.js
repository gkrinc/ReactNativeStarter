import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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

        const width = Dimensions.get('window').width;

        if (!showLoginForm) return null;

        return (
            <View style={{ paddingRight: 16, paddingLeft: 16, alignItems: 'center' }}>                
                <View style={{ marginBottom: 16 }}>
                    <TextInput placeholder={'Username'}
                               style={{ fontSize: 14,
                                        fontWeight: 'bold',
                                        height: 30,
                                        width: width * 0.80,
                                        padding: 4,
                                        backgroundColor: '#ffffff' }}
                               onChange={onUsernameChange}
                               fontFamily={'Raleway'}
                               value={username} />
                </View>
                <View style={{ marginBottom: 16 }}>
                    <TextInput placeholder={'Password'}
                               secureTextEntry={true}
                               style={{ fontSize: 14,
                                        fontWeight: 'bold',
                                        height: 30,
                                        width: width * 0.80,
                                        padding: 4,
                                        backgroundColor: '#ffffff' }}
                               onChange={onPasswordChange}
                               fontFamily={'Raleway'}
                               value={password} />
                </View>
                <View style={{ width: 220, alignItems: 'center' }}>
                    { loading ? <Image source={spinner} style={{ position: 'absolute', top: 6, right: 0 }} /> : null }
                    <TouchableOpacity
                            onPress={onLoginSubmit}
                            style={{ backgroundColor: '#766E5C',                                     
                                     paddingTop: 8,
                                     paddingBottom: 8,
                                     borderRadius: 6,
                                     alignItems: 'center',
                                     width: 160 }}><Text style={{ fontFamily: 'Raleway', fontSize: 14, color: '#ffffff', fontWeight: 'bold' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});
