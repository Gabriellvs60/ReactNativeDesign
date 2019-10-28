import React, { Component } from 'react'
import { 
    Text, 
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image 
                    style={styles.logo}
                        source={require('./images/falk.png')}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282830',
        width: Dimensions.get('window').width,
    },
    logocontainer:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        height: 100,
    },
});