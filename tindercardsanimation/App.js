import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderCustom from './components/HeaderCustom';
import SwipeCard from './components/SwipeCard';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <HeaderCustom/>
      <SwipeCard/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
     
    }
})

