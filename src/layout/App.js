import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Head from './Head.js';
import Body from './Body.js';

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
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  body: {
  }
});
