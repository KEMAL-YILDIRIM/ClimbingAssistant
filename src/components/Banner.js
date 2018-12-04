import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Color} from '../content/Content';

export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions
                .get('window')
                .width
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Image
                    style={styles.image}
                    source={{
                    uri: 'https://lh3.googleusercontent.com/1rnwuEGE7dKHNCDHfV64LuaKgJlheT1LeFUCCZGhuL0SSjTeFgj1VYUITlgz7xk5zcvO1A8X2zIThKgdWmfXq69uVA'
                }}/> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: Color.Grey
    },
    image: {
        height: 100,
        resizeMode: 'cover'
    }
});