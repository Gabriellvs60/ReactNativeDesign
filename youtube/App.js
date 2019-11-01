import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import Navbar from './src/components/Navbar';
import Tabbar from './src/components/Tabbar';
import Body from './src/components/Body';

import data from './src/assets/search.json';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
          <ScrollView>
            <Body video={data.items[0]}/>
            <Body video={data.items[1]}/>
            <Body video={data.items[0]}/>
          </ScrollView>
        <Tabbar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#fff',
    },
})

