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
                        <Image  resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{ uri: imgUrl + 'reactnative.png' }}
                        />
                     </View>
                </View>

                <View>
                    <Text onPress={this.saveImg.bind(this, 'reactnative.png') }
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

    saveImg(img) {
    //     let _that = this;
    //     CameraRoll.saveImageWithTag(imgUrl + img).then(
    //         (url) => {
    //             if (url) {
    //                 let images = _that.state.images;
    //                 //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
    //                 images.unshift(
    //                 {
    //                     uri: url,
    //                 }
    //             );
    //         _that.setState({
    //             images: images,
    //         });
    //
    //     }
    //   }
    // ).catch(error => {
    //   alert('保存照片失败-error-' + error);
    //
    // });

        CameraRoll.saveToCameraRoll(imgUrl + img)
            .then(
                (result) => {
                    alert('保存成功! \n' + result);
                }
            )
            .catch(error => {
                alert('保存失败! \n' + error);
            });

    }

}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
    },
    m5: {
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    row: {
        flexDirection: 'row',
    },
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
    imgHeight: {
        height: 180,
    },

    saveImg: {
        flex: 1,
        height: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#FFF',
        lineHeight: 20,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        backgroundColor: '#3BC1FF',
    },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
