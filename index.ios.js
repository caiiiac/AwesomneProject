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
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';



export default class AwesomeProject extends Component {
  	render() {
    	return (
    		<View style={styles.flex}>
    			<TouchableHighlight onPress={this.show.bind(this, 'TouchableHighlight控件')}
    				underlayColor='#E1F6FF'>
    				<Text style={styles.item}>TouchableHighlight控件</Text>
    			</TouchableHighlight>

    			<TouchableOpacity onPress={this.show.bind(this, 'TouchableOpacity控件')}>
    				<Text style={styles.item}>TouchableOpacity控件</Text>
    			</TouchableOpacity>

    			<TouchableWithoutFeedback onPress={this.show.bind(this, 'TouchableWithoutFeedback控件')}>
    				<Text style={styles.item}>TouchableWithoutFeedback控件</Text>
    			</TouchableWithoutFeedback>

    		</View>
      
    	);
  	}

  	show(txt) {
  		alert(txt);
  	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		marginTop: 25,
	},
	item: {
		fontSize: 18,
		color: '#434343',
		marginLeft: 5,
		marginTop: 10,
	},

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
