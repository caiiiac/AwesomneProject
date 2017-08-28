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
  TextInput,
  PixelRatio,
} from 'react-native';

var onePx = 1 / PixelRatio.get();


export default class AwesomeProject extends Component {
  	render() {
    	return (
<<<<<<< HEAD
      
    	);
  	}
}

const styles = StyleSheet.create({
  
=======
      		<View style={[styles.flex, styles.topStatus]}>
      			<Search></Search>
      		</View>
    	);
  	}
}


class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			value: null,
		};
	}

	hide(val) {
		this.setState({
			show: false,
			value: val,
		});
	}

	getValue(text) {
		this.setState({
			show: true,
			value: text,
		});
	}

	render() {
		return(
			<View style={styles.flex}>
				<View style={styles.flexDirection}>
					<View style={[styles.flex, styles.input]}>
						<TextInput
							keyboardType='web-search'
							placeholder='请输入节日关键词'
							value={this.state.value}
							onChangeText={this.getValue.bind(this)}/>
					</View>
					<View style={styles.btn}>
						<Text style={styles.search} onPress={this.hide.bind(this, this.state.value)}>百度一下</Text>
					</View>
				</View>
				{this.state.show?
					<View>
						<Text onPress={this.hide.bind(this, this.state.value + '快乐')}
							  style={styles.item} numberOfLines={1}>{this.state.value}快乐</Text>
						<Text onPress={this.hide.bind(this, '祝你' + this.state.value + '快乐')}
							  style={styles.item} numberOfLines={1}>祝你{this.state.value}快乐</Text>
					</View>
					: null
				}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		fontSize: 16,
		paddingTop: 5,
		paddingBottom: 10,
	},
	result: {
		marginTop: onePx,
		marginLeft: 18,
		marginRight: 5,
		height: 200,
	},
	flex: {
		flex: 1,
	},
	flexDirection: {
		flexDirection: 'row',
	},
	topStatus: {
		marginTop: 25,
	},
	input: {
		height: 40,
		borderColor: 'black',
		borderWidth: 1,
		marginLeft: 10,
		paddingLeft: 5,
		borderRadius: 5,
	},
	btn: {
		width: 80,
		marginLeft: -5,
		marginRight: 5,
		backgroundColor: '#23BEFF',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	search: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
	},
>>>>>>> 4ccef9a3f97436e006c0a0417a78fb0034b9cee2
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
