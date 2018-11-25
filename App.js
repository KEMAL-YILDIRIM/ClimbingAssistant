/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Head from './src/components/head';
import Body from './src/components/body';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Head></Head>
      <Body></Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 10,
  }
});
