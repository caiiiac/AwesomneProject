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
  Image
} from 'react-native';

var onePT = 1 / PixelRatio.get();
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class AwesomeProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
		};
	}


  	render() {
  		if (!this.state.movies) {
  			return this.renderLoadingView();
  		}

  		var movie = this.state.movies[0];
    	return this.renderMovie(movie);
  	}

  	renderLoadingView() {
  		return (
  			<View style={styles.container}>
  				<Text>正在获取数据...</Text>
  			</View>
  		);
  	}

  	renderMovie(movie) {
  		return (
  			<View style={styles.container}>
  				<Image 
  					source={{uri: movie.posters.thumbnail}}
  					style={styles.thumbnail}
  				/>
  				<View style={styles.rightContainer}>
  					<Text style={styles.title}>标题:{movie.title}</Text>
  					<Text style={styles.year}>{movie.year}年</Text>
  				</View>
  			</View>
  		);
  	}

  	componentDidMount() {
  		this.fetchData();
  	}

  	fetchData() {
  		fetch(REQUEST_URL)
  			.then((response) => response.json())
  			.then((responseData) => {
  				this.setState({
  					movies: responseData.movies,
  				});
  			})
  			.done();
  			// 调用done(),这样可以抛出异常而不是简单忽略
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FcFF',
	},
	thumbnail: {
		width: 53,
		height: 81,
		marginLeft: 10,
	},
	rightContainer: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center',
	},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
