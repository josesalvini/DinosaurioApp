import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AuthContext } from '../components/context';

const LoginScreen = ({navigation}) => {

    const { signIn } = React.useContext(AuthContext);

    return (
      <View style={styles.container}>
        <Text style={ styles.text }>LoginScreen screen</Text>
        <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppDrawer', {
                screen: 'Home',
              })}

            style={[styles.signIn, {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15
            }]}>
            <Text style={[styles.textSign, {
                color: '#009387'
            }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#3f4040',
    },
    text:{
      color: '#FFF',
      fontSize: 30
    },
    textLink:{
      color: '#FFF',
      fontSize: 15,
      marginTop:5
    },
    signIn: {
      width: '50%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
});