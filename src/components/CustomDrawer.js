import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import {Container, Header, Footer, Content, Right, Button, Icon, Left, ListItem, Thumbnail, Body, H3, Text, H2} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { DrawerActions } from '@react-navigation/native';

function SideBar({progress, ...props}){

const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange:[-100, 0],
});

return (
    <Container>
        <Header style={{backgroundColor:'#f3a81f', borderBottomWidth:0}}>
            <Right>
                <Button transparent onPress={()=>props.navigation.dispatch(DrawerActions.closeDrawer())}>
                    <Ionicons name="close" size={32} color='#fff'/>
                </Button>
            </Right>
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
            <ListItem style={{ borderBottomWidth:0}} thumbnail>
                <Left>
                    <Thumbnail style={{ width: 80, height: 80, }} source={require('../images/userprofile.png')} />
                </Left>
                <Body style={{ borderBottomWidth:0}}>
                    <H3>Gómez Salvini José Emilio</H3>
                    <Text note>Sucursal: R20</Text>
                </Body>
            </ListItem>
            <DrawerContentScrollView {...props}>
                <Animated.View style={{ transform: [{translateX}] }}>
                {/*Contenido del menu*/}
                <DrawerItemList {...props}/>
                <DrawerItem
                    label="Options"
                    icon={({color, size}) => (
                        <Ionicons name="options" size={24} color='#f3a81f'/>
                    )}
                    onPress={()=> props.navigation.navigate('Home')}
                    />
                </Animated.View>
            </DrawerContentScrollView>
        </Content>
        <Footer style={{backgroundColor:'#f3a81f'}}/>
    </Container>
);
}/* End function SideBar*/

export default SideBar