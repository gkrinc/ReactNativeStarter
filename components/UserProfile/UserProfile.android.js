import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default React.createClass({

    render() {

        let  {
            email,
            logout,
            profilePic,
            username,
        } = this.props;

        // returning null from a render method, will render nothing
        if (!username) return null;

        // Great resource for understanding flexbox layout: https://medium.com/the-react-native-log/understanding-react-native-flexbox-layout-7a528200afd4#.i1o4dbxzz
        return (
            <View style={{ paddingRight: 16, paddingLeft: 16 }}>                
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={logout}
                                      style={{ backgroundColor: '#766E5C',                                     
                                               paddingTop: 8,
                                               paddingBottom: 8,
                                               borderRadius: 6,
                                               alignItems: 'center',
                                               width: 160 }}><Text style={{ fontFamily: 'Raleway',
                                                                            fontSize: 14,
                                                                            color: '#ffffff',
                                                                            fontWeight: 'bold' }}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 86,
                                   height: 86,
                                   borderWidth: 3,
                                   borderColor: '#766E5C',
                                   borderRadius: 86/2,
                                   overflow: 'hidden' }}>
                        <Image source={{ uri: profilePic }} style={{ width: 80, height: 80, borderRadius: 80/2 }} />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontFamily: 'Raleway',
                                       fontWeight: 'bold',
                                       fontSize: 16,
                                       color: '#ffffff' }}>{username}</Text>
                        <Text style={{ fontFamily: 'Raleway',
                                       fontSize: 16,
                                       color: '#ffffff' }}>{email}</Text>
                    </View>
                </View>
            </View>
        );
    }
});
