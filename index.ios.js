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
  TouchableOpacity,
  Image
} from 'react-native';

var onePT = 1 / PixelRatio.get();
var imgs = [
    'https://www.baidu.com/img/bd_logo1.png',
    'http://img4.ngacn.cc/ngabbs/nga_classic/logo10.png',
    'http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png'
]

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <RNImage imgs={imgs}> </RNImage>
      </View>
        
    );
  }
}

class RNImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      imgs: this.props.imgs,
    };
  }

  render() {
    return(
      <View style={[styles.flex, {alignItems: 'center'}]}>
        <View style={styles.image}>
          <Image style={styles.img}
            resizeMode="contain"
            source={{uri: this.state.imgs[this.state.count]}} />
        </View>

        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview.bind(this)}>
            <View style={styles.btn}><Text>上一张</Text></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View style={styles.btn}><Text>下一张</Text></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  goPreview() {
    var count = this.state.count;
    count--;
    if (count>=0) {
      this.setState({
        count: count,
      });
    } else {
      this.setState({
        count: this.state.imgs.length-1,
      });
    }
  }

  goNext() {
    var count = this.state.count;
    count++;
    if (count<this.state.imgs.length) {
      this.setState({
        count: count,
      });
    } else {
      this.setState({
        count: 0,
      });
    }
  }

}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 20,
  },
  btns: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  img: {
    height: 150,
    width: 200,
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
