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
    View,
    PixelRatio,
    Modal
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
        };
    }

    render() {
        return (
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Text
                    style={styles.upText}
                    onpress={ this._setModalVisible.bind(this, true)}
                >检查更新</Text>
            </View>
        );
    }

    _setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
}

const styles = StyleSheet.create({
    upText: {
        fontSize: 28,
        color: 'red',
        marginTop: 30,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
