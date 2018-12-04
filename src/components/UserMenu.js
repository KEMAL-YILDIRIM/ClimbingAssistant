import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Avatar from './Avatar';
import UserName from './UserName';
import More from './More';

export default class UserMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <Avatar/>
                    <UserName/>
                </View>
                <View style={styles.more}>
                    <More/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    more: {}
});