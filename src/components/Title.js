import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Climbing Assistant</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'calibri',
        fontSize: 24,
        
    }
});