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
    Image,
    CameraRoll
} from 'react-native';

let fetchParams = {
    first: 10,
    assetType: 'Photos',
};

let imgUrl = 'http://www.reactnative.vip/img/';

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{ uri: imgUrl + 'dongfangyao888.jpg' }}
                        />
                    </View>

                <View style={styles.flex_1}>
                    <Image  resizeMode='stretch'
                        style={[styles.imgHeight, styles.m5]}
                        source={{ uri: imgUrl + 'reactnative.png' }}
                    />
                </View>

                <View>
                    <Text onPress={this.saveImg.bind(this, 'dongfangyao888.jpg', 'reactnative.png') }
                    style={styles.saveImg}
                    >
                        保存图片到相册
                    </Text>
                </View>

                <View style={styles.imageGrid}>
                    {
                        this.state.images.map((image) =>
                            <Image
                                style={styles.image}
                                resizeMode='stretch'
                                source={image}
                                key={image.uri}
                        />
                    )
                }
                </View>

            </ScrollView>
        );
    }

    componentDidMount() {
        CameraRoll.getPhotos(fetchParams)
            .then(
                (data) => {
                    console.log(data);
                    let edges = data.edges;
                    let images = edges.map((edge) => {
                        return edge.node.image;
                    });
                    this.setState({
                        images: images,
                    });
                }
            )
            .catch(error => {
                console.log('发生错误:' + error);
            });
    }

    saveImg(img1, img2) {
        let _that = this;
        CameraRoll.saveImageWithTag(imgUrl + img1).then(
            (url) => {
                if (url) {
                    let images = _that.state.images;
                    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
                    images.unshift(
                    {
                        uri: url,
                    }
                );
            _that.setState({
                images: images,
            });
            //继续保存第二张图片
            CameraRoll.saveImageWithTag(imgUrl + img2).then(
            (url) => {
              images.unshift(
                {
                  uri: url,
                }
              );
              _that.setState({
                images: images,
              });
              alert('图片全部保存成功');
            }

          ).catch(
            error => {
              alert('保存第二张照片失败-error-' + error);
            }
            );

        }
      }
    ).catch(error => {
      alert('保存第一张照片失败-error-' + error);

    });



  }

}

const styles = StyleSheet.create({

    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
