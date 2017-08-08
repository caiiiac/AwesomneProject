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
  SectionList
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<SectionList
    			sections={[
    				{title: 'D', data: [{key: 'Devin'}]},
    				{title: 'J', data: [
    				{key: 'Jackson'}, 
    				{key: 'James'}, 
    				{key: 'Jillian'}, 
    				{key: 'Jimmy'}, 
    				{key: 'Joel'}, 
    				{key: 'John'}, 
    				{key: 'Julie'}
    				]},
    			]}
    			renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    			renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    		/>
    	</View>
      
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)',
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
