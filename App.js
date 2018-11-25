/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Head from './src/components/Head.js';
import Body from './src/components/Body.js';

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
    marginTop: 10
  }
});
