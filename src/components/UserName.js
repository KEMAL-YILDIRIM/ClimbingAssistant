import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class UserName extends Component {
    render() {
        return (
            <View>
                <Text style={styles.name}>Edu Marin</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontFamily: 'calibri',
        fontSize: 16
    }
});