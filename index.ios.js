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
  ScrollView,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
    	<ScrollView>
    	<Text style={{fontSize:30}}> Scroll me plz</Text>
    	<Image source={require('./img/star.jpg')} style={{width: 60, height: 60}} />
    	</ScrollView>
      
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
