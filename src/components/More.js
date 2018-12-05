import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.moreText}>...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    moreText: {
        fontSize: 40
    }
});