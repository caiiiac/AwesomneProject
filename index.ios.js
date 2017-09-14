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


export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Counter />
                <Counter />
            </View>
        );
    }
}

class Counter extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <View style={styles.row}>
                <Text style={[ styles.font, styles.counterMargin ]}>计数器:{this.state.counter}</Text>
                <Text style={ styles.font } onPress={this.addCounter.bind(this)}>点击</Text>
            </View>
        );
    }

    addCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flexDirection: 'row',
    },
    font: {
        fontSize: 20,
    },
    counterMargin: {
        marginRight: 20,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
