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
  Image
} from 'react-native';

class Greeting extends Component {
	render() {
		return (
			<Text>Hello {this.props.name}!</Text>
		);
	}
}

export default class AwesomeProject extends Component {
  render() {

    // //  	图片
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    // return (
    //   <Image source={pic} style={{width: 193, height: 110}} />
    // );

		return (
    		<View style={{alignItems: 'center'}}>
    			<Greeting name='Rexxar' />
    			<Greeting name='Jaina' />
    			<Greeting name='Valeera' />
    		</View>
   		 );
 	 }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
