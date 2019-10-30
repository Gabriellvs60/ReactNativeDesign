import React, { Component } from 'react'
import { 
    StyleSheet,
    ScrollView,
    View,
    Image, 
    Dimensions,
    } from 'react-native'

export default class Body extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.bigView}>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img2.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img5.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img9.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img10.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img7.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img8.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img2.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img5.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img9.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img10.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img7.jpeg')}
                />
            </View>
            <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../images/img8.jpeg')}
                />
            </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    bigView:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallView:{
        margin: 2,
        height: 100,
        // pega a metade da tela, levando em conta a margin, subtrai por 4, pois tem 2 
        width: (Dimensions.get('window').width / 2) - 4,
    },
    myImage: {
        flex: 1,
        width : null,
        alignSelf: 'stretch',
    }
});
