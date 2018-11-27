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
        <Head style={styles.head}></Head>
        <Body style={styles.body}></Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    marginTop: 10
  },
  head: {
    flex: 1,
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  body: {
    flex: 2
  }
});
