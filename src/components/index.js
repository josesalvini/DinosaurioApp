import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { Ionicons } from '@expo/vector-icons';
import SideBar from './CustomDrawer';

const colorTheme = '#f3a81f'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function AppDrawer() {
  return (
      <Drawer.Navigator
            drawerContent={ (props) => <SideBar {...props}/> }
            drawerContentOptions={{
              activeTintColor: '#f3a81f',
              itemStyle: { marginVertical: 3 },
            }}>
        <Drawer.Screen name="Home"
                      component={HomeScreen}
                      options={{
                        drawerIcon:({ focused, color, size }) => (
                          <Ionicons name="home" size={24} color='#f3a81f' />
                        )
                      }}
        />
        <Drawer.Screen name="Notifications"
                      component={NotificationsScreen}
                      options={{
                        drawerIcon:({ focused, color, size }) => (
                          <Ionicons name="alarm" size={24} color='#f3a81f' />
                        )
                      }}
        />
        <Drawer.Screen name="Settings"
                      component={SettingsScreen}
                      options={{
                        drawerIcon:({ focused, color, size }) => (
                          <Ionicons name="md-settings" size={24} color='#f3a81f' />
                        )
                      }}
        />
      </Drawer.Navigator>
  );
}

const AppStack = () => {
  return (
      <Stack.Navigator style={{fontFamily:'System'}} initialRouteName="AppDrawer" headerMode='none'>
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#3f4040'
    },
    containerMenu: {
      flex:1,
    },
    containerImage: {
      alignItems:'center'
    },
    text:{
      color: colorTheme,
      fontSize: 20,
    },
    imageProfile:{
      width:100,
      height:100,
      borderRadius:60
    },
    textUser:{
      marginTop: 10,
      fontSize: 20,
      color:'#000',
      marginLeft: 20,
    },
    textSucursal:{
      fontSize: 15,
      color:'#000',
      marginLeft: 20,
    },
});