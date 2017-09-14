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

import { setValue, getValue } from './counter';
import { on, remove } from './event';

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
            // counter: 0,
            counter: getValue(),
        };

        this.handler = ( (value) => {
            this.setState({
                counter: value
            });
        }).bind(this);
    }

    componentDidMount() {
        on('counter-changed', this.handler);
    }

    componentWillUnmount() {
        remove('counter-changed', this.handler);
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
        setValue(getValue() + 1);
        this.setState({
            // counter: this.state.counter + 1
            counter: getValue()
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
