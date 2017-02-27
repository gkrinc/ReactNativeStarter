import React from 'react';
import {
    Text,
    View,
} from 'react-native';

export default React.createClass({

    render() {

        let  {
            username,
        } = this.props;

        return (
            <View>
                <Text>Username: {username}</Text>
            </View>
        );
    }
});
