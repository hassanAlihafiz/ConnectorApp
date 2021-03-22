import React, { Component } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
const SplashScreen = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

        width: "100%",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Image
        style={{ height: 410, width: 230 }}
        source={require("../assest/Log.png")}
      />
    </View>
  );
};
export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  logoText: {
    fontSize: 35,
    marginTop: 5,
    color: "white",
    fontWeight: "700",
  },
  contentContainer: {
    top: "40%",
    alignItems: "center",
  },
});
