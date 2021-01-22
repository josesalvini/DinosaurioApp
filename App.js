import { Image, Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import 'react-native-gesture-handler';
import AppStack from './src/components/index';

import { AuthContext } from './src/components/context';

import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './src/screens/RootStackScreen';
import * as Font from 'expo-font';

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authorizeContext = React.useMemo(() => ({
    signIn: () => {
      setIsLoading(false);
      setUserToken('asdf')
    },
    signOut: () => {
      setIsLoading(false);
      setUserToken(null)
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
  }, [])

  if(isLoading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#f3a81f'/>
        <Text style={styles.text} >Loading...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authorizeContext}>
      <NavigationContainer>
        { userToken !== null ? (
          <AppStack/>
        ) :
        <RootStackScreen/>
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#3f4040'
  },
  text:{
    color: '#FFF',
    fontSize: 30,
    marginTop: 10,
  },
});

