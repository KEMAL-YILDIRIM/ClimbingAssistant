import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Icon} from '../content/Content';

export default class RouteFooter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                    url: Icon.shoe
                }}/>

                <Image
                    style={styles.image}
                    source={{
                    url: Icon.chalkbag
                }}/>

                <Image
                    style={styles.image}
                    source={{
                    url: Icon.carabiner
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({container: {}, image: {}});