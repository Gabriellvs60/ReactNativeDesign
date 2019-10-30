import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    ImageBackground,
    Image,
    View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground 
       style={styles.headerbg}
       source={require('../images/img4.jpeg')}>
        <View style={styles.headercontainer}>
            <View style={styles.profilepiccontainer}>
                <Image 
                    style={styles.mypic}
                    // profilepic
                    source={require('../images/profile.jpeg')}
                />
            </View>
            <Text style={styles.name}>Hitesh Clouds</Text>
            <Text style={styles.liner}>My Fast Cars</Text>

        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    headerbg:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    headercontainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    profilepiccontainer:{
        width: 180,
        height: 180,
        borderRadius: 100,
        borderWidth: 15,
        borderColor: 'rgba(0,0,0,0.4)',
    },
    mypic:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name:{
        marginTop: 20,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    liner:{
        color: '#fff',
        marginTop: 5,
        fontSize: 15,
        fontStyle: 'italic',
    },
})