import React, { Component } from 'react'
import { 
    Text, 
    View,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native'
import Myform from './MyForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image 
                    style={styles.logo}
                        source={require('./images/falk.png')}
                    />
                </View>
                <View style={styles.myform}>
                    <Myform/>
                </View>
            </KeyboardAvoidingView>
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
    /*  titlen:{
        color : '#fff',
        marginTop : '10',
     },  */
    myform:{
        flex: 1,
    }
});

