import React, { Component } from 'react'
import { StyleSheet,TouchableOpacity, Text, View, Image  } from 'react-native'

export default class Tabbar extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.container}>
            <Image 
            style={styles.imageIcon} source = {require('../assets/home.png')}></Image>
            <Text style={styles.mytext}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
            <Image 
            style={styles.imageIcon} source = {require('../assets/whatshot.png')}></Image>
            <Text style={styles.mytext}>WhatsHot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
            <Image 
            style={styles.imageIcon}
            source = {require('../assets/sub.png')}>
            </Image>
            <Text style={styles.mytext}>Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
            <Image 
            style={styles.imageIcon}
            source = {require('../assets/alert.png')}>
            </Image>
            <Text style={styles.mytext}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
            <Image
            style={styles.imageIcon}
            source = {require('../assets/folder.png')}>
            </Image>
            <Text style={styles.mytext}>Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    tabbar:{
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth : 2,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    mytext:{
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 2,
        color: 'rgb(50,50,50)',
    },
    imageIcon:{
        width: 30,
        height: 30,
    },
})

//
