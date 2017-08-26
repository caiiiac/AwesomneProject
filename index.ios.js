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

import Header from './header';

export default class AwesomeProject extends Component {
  render() {
    return (
    	<View style={styles.flex}>
    		<Header></Header>
    	</View>
    );
  }
}

class List extends Component {
	render() {
		return(
			<View style={styles.list_item}>
				<Text style={styles.list_item_font}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	list_item: {
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		justifyContent: 'center',
	},
	list_item_font: {
		fontSize: 16,
	},
	news_item: {
		marginLeft: 10,
		marginRight: 10,
		fontSize: 15,
		lineHeight: 40,
	},
	news_title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#CD1D1C',
		marginLeft: 10,
		marginTop: 15,
	},
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
