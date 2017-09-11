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
    Linking,
    TouchableHighlight
} from 'react-native';


export default class AwesomeProject extends Component {
    componentDidMount() {
        var url = Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('schem:' + url);
            } else {
                console.log('schem为空');
            }
        }).catch(err => console.error('错误:', err));
    }
    render() {
        return (
            <View>
                <LinkButton url={'https://www.baidu.com'} text="打开百度" />
            </View>
        );
    }
}

class LinkButton extends  Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        url: React.PropTypes.string,
        text: React.PropTypes.string.isRequired,
    }

    render() {
        return(
            <TouchableHighlight
                style={ styles.button }
                underlayColor='#a5a5a5'
                onPress={ () => Linking.canOpenURL(this.props.url).then( supported => {
                    if (supported) {
                        Linking.openURL(this.props.url);
                    } else {
                        console.log('无法打开:' + this.props.url);
                    }
                })}
            >
                <Text style={ styles.buttonText }>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    buttonText: {
        fontSize: 20,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
