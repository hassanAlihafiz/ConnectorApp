import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import themeColor from '../assets/Color/colors';
// import firebase from "../config/firebase"
const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColor.PRIMARY }}>
      {/*Top Large Image */}
      <Image
        source={require('../assets/ConnectVolt-01.png')}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 30,
          fontFamily: 'cochin',
          letterSpacing: 4,
        }}
        {...props}>
        <DrawerItemList {...props} />

       <DrawerItem
       style={{backgroundColor:themeColor.PRIMARY}}
        label="Logout"
        onPress={() =>{
          firebase.auth().signOut()
          props.navigation.navigate("Login")
        }}
      />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 110,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
