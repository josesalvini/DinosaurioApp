import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={ styles.text }>Settings screen</Text>
        <Text style={ styles.textLink } onPress={()=> navigation.navigate('Home')}>volver a Home</Text>
      </View>
    );
  }

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
});