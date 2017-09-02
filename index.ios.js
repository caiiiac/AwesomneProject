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
