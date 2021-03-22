import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const IconLabel = ({ name, label, color }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={name}
        type="ionicon"
        size={14}
        color={color}
        style={styles.iconStyle}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 10,

    alignItems: "center",
  },
  labelStyle: {
    fontSize: 15,
  },
  iconStyle: {
    marginRight: 3,
  },
});

export default IconLabel;
