import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
// import { Container } from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //backgroundColor: '#282830',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});