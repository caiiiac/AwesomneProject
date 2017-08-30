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
  ProgressViewIOS
} from 'react-native';

var onePT = 1 / PixelRatio.get();


export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  getProgress(offset) {
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }
  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS style={styles.progress} progress={this.getProgress(0)}/>
        <ProgressViewIOS style={styles.progress} progressTintColor="purple" progress={this.getProgress(0.2)} />
        <ProgressViewIOS style={styles.progress} progressTintColor="red" progress={this.getProgress(0.4)} />
        <ProgressViewIOS style={styles.progress} progressTintColor="orange" progress={this.getProgress(0.6)} />
        <ProgressViewIOS style={styles.progress} progressTintColor="yellow" progress={this.getProgress(0.8)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: 'transparent',
  },
  progress: {
    marginTop: 20,
  },
  
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
