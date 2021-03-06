import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import HeroText from './HeroText';

export default class HeroImage extends Component {
  render() {
    return(
        <ImageBackground 
            source={require('../images/img2.jpeg')}
            style={styles.hero}
        >
            <HeroText/>
            </ImageBackground>
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