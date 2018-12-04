import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

export default class RouteImage extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions
                .get('window')
                .width
        };
    }

    render() {

        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageUrl = 'https://lh3.googleusercontent.com/1rnwuEGE7dKHNCDHfV64LuaKgJlheT1LeFUCCZGhuL0SSj' +
                'TeFgj1VYUITlgz7xk5zcvO1A8X2zIThKgdWmfXq69uVA';
        return (
            <View style={styles.container}>
                <Image
                    style={[
                    styles.image, {
                        height: imageHeight
                    }
                ]}
                    source={{
                    uri: `${imageUrl}=s${imageHeight}`
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    image: {
        resizeMode: 'cover'
    }
});