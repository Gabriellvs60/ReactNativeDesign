import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outerView, styles.leftBar]}>
            <Text style={styles.textOne}>75+</Text>
            <Text style={styles.textTwo}>Images</Text>
        </View>
        <View style={styles.outerView}>
            <Text style={styles.textOne}>70K</Text>
            <Text style={styles.textTwo}>Subscribers</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mid:{
        flexDirection: 'row',
        backgroundColor: '#CF000F',
        borderTopWidth: 8,
        borderTopColor: '#fff',
    },
    outerView:{
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    textOne:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textTwo:{
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    leftBar:{
        borderRightWidth: 4,
        borderRightColor: '#fff',
    }
})

