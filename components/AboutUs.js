import * as React from 'react';
import { Text, View, StyleSheet, Image ,Dimensions} from 'react-native';
import themeColor from '../assets/Color/colors';
const AboutUs = () => {
  return (
    <View style={styles.container}>
     <View style={{marginTop:"10%"}}>
      <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>
        EV Mapper
      </Text>
     </View>

      <View style={{justifyContent:"center",marginTop:"5%"}}>
        <Text style={{ alignSelf: 'center', width: '80%',fontSize:20 }}>
          EV Mapper was founded in May 2021 to support the electrification of
          transport and the use of electric vehicles (EV). Our aim is to make it
          easier for EV drivers to navigate the road network given the
          development of the charging point infrastructure in the UK.
        </Text>
      </View>

      <View style={{marginTop:"5%"}}>
      <Image source={require("../assets/ConnectVolt-01.png")} style={{width:Dimensions.get("window").width*0.9,height:190}}/>
      </View>
    </View>
  );
};
export default AboutUs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: themeColor.PRIMARY,
  },
});
