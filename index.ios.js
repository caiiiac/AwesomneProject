/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS
} from 'react-native';

export default class AwesomeProject extends Component {
  	render() {

  		let defaultName = '首页';
  		let defaultComponent = List;
    	return (
      		<NavigatorIOS
      			ref='nav'
      			initialRoute = {{ 
      				component: defaultComponent,
      				title: defaultName,
      			}}

      			style={styles.flex}
      		/>
    	);
  	}
}


class List extends Component {

	_pressButton = () => {
		this.props.navigator.push({
			component: Detail,
			title: '详情',
			passProps: {id: 1}
		});
		
	}

	render() {

		return (
			<ScrollView style={styles.flex}>
				<Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮济州岛3日游</Text>
				<Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮日本7日游</Text>
				<Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮地中海10日游</Text>
			</ScrollView>
		);

	}
}

const USER_MODELS = {
	1: {name: 'mac', age: 18},
	2: {name: 'Lee', age: 20},
	2: {name: 'Rose', age: 16},
};

class Detail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: null
		};
	}

	componentDidMount() {
		//获取传递过来的参数: id
		this.setState({
			id: this.props.id
		});
	}

	_pressButton() {
		this.props.navigator.pop();

	}

	render() {
		return(
			<ScrollView>
				<Text style={styles.list_item} onPress={this._pressButton.bind(this)}>用户id:{this.state.id}</Text>
			</ScrollView>
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
		fontSize: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		justifyContent: 'center',
	},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
