import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from './src/components/Navbar';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
    },
})

