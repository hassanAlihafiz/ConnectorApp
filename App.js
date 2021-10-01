import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import themeColor from './assets/Color/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import About from './components/AboutUs';
import HomeScreen from './components/HomeScreen';
import CustomSidebar from "./components/CustomeMenuBar"
import Header from "./components/HeaderIcon"
const DrawerTab=createDrawerNavigator()

const Drawer=({navigation})=>{
  return(
     <DrawerTab.Navigator
  screenOptions={{
    drawerStyle: {
      width: 240,
   
    },
  }}
        drawerContent={(props) => <CustomSidebar {...props} />}>
        <DrawerTab.Screen
          name="Home"
          options={{
            drawerLabel: 'Home',
          }}
          component={HomeScreen}
         
        />     
        <DrawerTab.Screen
          name="About"
          options={{
            drawerLabel: 'About',
          
            activeTintColor: '#FF6F00',
          }}
          component={About}
         
        />     
      </DrawerTab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
 <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="About Us" component={About} options={{ headerShown: false }}/>
       <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
 <Stack.Screen name="Home" component={Drawer} options={{ headerShown: false }}/>
    </Stack.Navigator>
 </NavigationContainer>
  );
}
