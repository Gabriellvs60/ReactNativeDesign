import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardImage from './components/CardImage';

export default class App extends Component {
  render() {
    return (
     <CardImage />
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

