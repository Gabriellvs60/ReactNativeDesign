import React, { Component } from 'react'
import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'

export default class Horizontal extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
               <View style={styles.outer}>
                   <Text style={styles.innerText}>Welcome to LCO app</Text>
               </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    outer: {

    },
    innerText: {

    },
});