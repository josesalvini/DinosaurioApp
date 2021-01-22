import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function HomeScreen({navigation}) {
    return (
      <Container>
        <Header style={{backgroundColor:'#f3a81f'}}>
          <Left>
            <Button transparent onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="menu" size={32} color='#fff'/>
            </Button>
          </Left>
          <Body style={{flex: 1, alignItems:'center'}}>
            <Title style={{fontFamily:'System'}}>Dinosaurio App</Title>
          </Body>
          <Right/>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.container}>
            <Text style={ styles.text }>Home screen</Text>
            <Text style={ styles.textLink } onPress={()=> navigation.navigate('Notifications')}>ir a Notifications</Text>
            <Text style={ styles.textLink } onPress={()=> navigation.navigate('Settings')}>ir a Settings</Text>
          </View>
        </Content>
      </Container>
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