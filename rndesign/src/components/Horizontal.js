import React, { Component } from 'react'
import { 
    Text,
    View,
    Dimensions,
    ScrollView,
    StyleSheet,
} from 'react-native'

export default class Horizontal extends Component {
    render() {
        return (
            <ScrollView 
            horizontal={true} 
            pagingEnabled={true} 
            style={styles.container}>
               <View style={styles.outer}>
                   <Text style={styles.innerText}>Welcome to LCO app</Text>
               </View>
               <View style={[styles.outer, styles.red]}>
                   <Text style={styles.innerText}>Best quality videos</Text>
               </View>
               <View style={[styles.outer, styles.green]}>
                   <Text style={styles.innerText}>Available on ios and Android</Text>
               </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    outer: {
        backgroundColor: '#007bb6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
/*         com o dimensions podemos pegar o tamanho da tela
 */        
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        },
    innerText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    },
    red: {
        backgroundColor: '#dd4b39',
        },
    green: {
        backgroundColor: '#27ae60',
        },
});