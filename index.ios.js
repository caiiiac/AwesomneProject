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
    	// flexDirection:row column
    	// justifyContent:flex-start center flex-end space-around space-between
    	<View style={{
    		flex: 1, 
    		flexDirection: 'column',
    		justifyContent: 'space-around',
    		alignItems: 'flex-end',
    	}} >
    		<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    		<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    		<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    	</View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
