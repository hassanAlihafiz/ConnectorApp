import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import Constants from 'expo-constants';
import themeColor from '../assets/Color/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { PROVIDER_GOOGLE, Marker,PROVIDER_DEFAULT } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {
  fetch('https://chargepoints.dft.gov.uk/api/retrieve/registry/format/json')
    .then((response) => response.text())
    .then((textResponse) => console.log('response is ', textResponse))
    .catch((error) => {
      console.log(error);
    });
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Find The Charging Points</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,

          ...(Platform.OS === 'ios' && {
            zIndex: 10, // NEWLY ADDED, YOU CAN ALSO GET RID OF THIS VIEW IF NOT NEEDED
          }),
        }}>
        <DropDownPicker
          items={[
            { label: 'USA', value: 'usa' },
            { label: 'UK', value: 'uk' },
            { label: 'France', value: 'france' },
          ]}
          onChangeItem={(item) => {
            console.log(item.value);
          }}
          placeholder="Select Connectors"
          containerStyle={{ flex: 1, height: 50 }}
          style={{ backgroundColor: '#ffffff' }}
          dropDownContainerStyle={{
            backgroundColor: 'white',
            zIndex: 1000,
            elevation: 1000,
          }}
        />
      </View>

     <MapView provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        showsUserLocation={true}
       
       
        style={{ flex: 1, margin: 10 }}
  
        initialRegion={{
          latitude: 51.431454,
          longitude: 0.031175,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
        showsBuildings>
        <Marker
          coordinate={{
            latitude: 51.431454,
            longitude: 0.031175,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
          title="2 Riddons Road">
          <FontAwesome name="map-marker" size={40} color="red" />
        </Marker>
        <Marker
          coordinate={{
            latitude: 51.48092,
            longitude: -0.419318,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
          title="My location">
          <FontAwesome name="map-marker" size={40} color="red" />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: themeColor.PRIMARY,
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
