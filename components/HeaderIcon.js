
import React from 'react';

import {  View, Text, Image, TouchableOpacity, } from 'react-native';
const HamburgerIcon = (props) => {
 
  const toggleDrawer = () => {
 
    props.navigationProps.toggleDrawer();
 
  }
  return (
 
    <View style={{ flexDirection: 'row' }}>
 
      <TouchableOpacity onPress={toggleDrawer} >
 
        <Image
          source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
 
      </TouchableOpacity>
 
    </View>
 
  );
}
export default HamburgerIcon