import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Head from './Head.js';
import Body from './Body.js';
import {Color} from '../content/Content';

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
    borderBottomColor: Color.Crimson,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  body: {}
});
