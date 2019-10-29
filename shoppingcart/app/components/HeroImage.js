import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class HeroImage extends Component {
  render() {
    return(
        <Image 
            source={require('../images/img2.jpeg')}
            style={styles.hero}
        />
    )
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});