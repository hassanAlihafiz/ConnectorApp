import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CardView = ({ image, name }) => {
  return (
    <View
      style={{
        height: 25,
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <Image source={image} style={{ width: 30, height: 30 }} />
      <Text
        style={{
          fontSize: 15,
          color: "black",
          fontWeight: "400",
          marginLeft: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Country = () => {
  return (
    <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
      <CardView name={"United Kingdom"} image={require("../assest/uk.png")} />
      <CardView name={"Spain"} image={require("../assest/spain.png")} />
      <CardView name={"Italy"} image={require("../assest/italy.png")} />
      <CardView name={"Denmark"} image={require("../assest/denmark.png")} />
      <CardView name={"Norway"} image={require("../assest/norway.png")} />
      <CardView name={"Ireland"} image={require("../assest/ireland.png")} />
      <CardView name={"Australia"} image={require("../assest/australia.png")} />
      <CardView
        name={"Newzealand"}
        image={require("../assest/new-zealand.png")}
      />
    </View>
  );
};

export default Country;
