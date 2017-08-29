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
  Picker
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null
    };
  }

  render() {
    return (
      <View style={[styles.flex, {marginTop:45}]}>
        <Text>Picker组件</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={lang => this.setState({language:lang})}
          >

        <Picker.Item label="Java" value="java" />
        <Picker.Item label="swift" value="swift" />
        <Picker.Item label="PHP" value="PHP" />
        <Picker.Item label="Python" value="Python" />
        </Picker>

        <Text>{this.state.language}</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
