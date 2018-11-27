import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Title from './Title.js';

export default class Head extends Component {
    render() {
        return (
            <View>
                <Title/>
                <Image
                    style={styles.image}
                    source={{
                    uri: 'https://lh3.googleusercontent.com/1rnwuEGE7dKHNCDHfV64LuaKgJlheT1LeFUCCZGhuL0SSjTeFgj1VYUITlgz7xk5zcvO1A8X2zIThKgdWmfXq69uVA'
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 100
    }
});