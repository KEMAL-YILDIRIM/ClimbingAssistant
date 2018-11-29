import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class More extends Component {
    render() {
        return (
            <View>
                <Text style={styles.moreText}>...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    moreText: {
        fontSize: 40
    }
});