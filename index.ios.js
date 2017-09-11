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
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0,0,0,0.5)' : 'red',
        };

        let innerContainerTransparentStyle = this.state.transparent ?
            { backgroundColor: '#fff', padding:20 } :
            null;

        return (
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Modal
                    animationType={ this.state.animationType }
                    transparent={ this.state.transparent }
                    visible={ this.state.modalVisible }
                    onRequestClose={ () => { this.setModalVisible(false) }}
                    onshow={ this.startShow }
                >
                    <View
                        style={[ styles.container, modalBackgroundStyle ]}
                    >
                        <View
                            style={[ styles.innerContainer, innerContainerTransparentStyle ]}
                        >
                            <Text style={ styles.new }>发现新版本</Text>
                            <Text style={ [styles.new, styles.upText ] } onPress={ () => { this.setModalVisible(false) }}>点击更新</Text>
                        </View>

                    </View>

                </Modal>

                <Text
                    style={styles.upText}
                    onPress={ this.setModalVisible.bind(this, true) }
                >检查更新</Text>
            </View>
        );
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    startShow() {
        alert('开始显示');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    new: {
        textAlign: 'center',
    },
    upText: {
        fontSize: 28,
        color: 'red',
        marginTop: 30,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
