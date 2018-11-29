import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Title from '../components/Title.js';
import HeadImage from '../components/HeadImage.js';
import UserMenu from '../components/UserMenu.js';

export default class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Title/>
                <HeadImage/>
                <UserMenu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({container: {}});