import React, { Component } from 'react';

import { 
    StyleSheet, 
    Text,
    Image,
    View 
    } from 'react-native'

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navbar}>
              <Image 
              style={styles.logo}
              source = {require('../assets/youtube-logo.png')}
              />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
       
    },
    navbar:{
        marginTop:35,
        height: 55,
        backgroundColor: '#fff',
        elevation: 3,

        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo:{
        width: 120,
        height: 50,
    }
    
})

