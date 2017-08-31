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
  FlatList
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<FlatList
    			data={[
    				{key: 'Devin'},
    				{key: 'Jackson'},
    				{key: 'James'},
    				{key: 'Joel'},
    				{key: 'John'},
    				{key: 'Jillian'},
    				{key: 'Jimmy'},
    				{key: 'Julie'},
    			]}
    			renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    		></FlatList>
    	</View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
