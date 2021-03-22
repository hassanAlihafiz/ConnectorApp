import React, { Component } from "react";

import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class DetailScreen extends React.Component {
  state = {
    quantity: 1,
  };

  addQuantity = (quantity) => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  subtractQuantity = (quantity) => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 40,
              marginHorizontal: 20,
            }}
          >
            <View style={{ width: "10%" }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Ionicons name={"arrow-back"} size={30} />
              </TouchableOpacity>
            </View>
            <View style={{ width: "80%", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Ionicons name={"flame"} size={30} />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  290 Calories
                </Text>
              </View>
            </View>
            <View style={{ width: "10%" }}>
              <Ionicons name={"heart"} size={30} />
            </View>
          </View>
          <Image
            source={require("../assest/meatPizza.png")}
            style={{
              height: 300,
              width: 300,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              backgroundColor: "#f6f3fb",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
              marginTop: 15,
            }}
          >
            <TouchableOpacity onPress={this.addQuantity}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                +
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 20,
              }}
            >
              {this.state.quantity}
            </Text>

            <TouchableOpacity onPress={this.subtractQuantity}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
              marginTop: 30,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Smokehouse{" "}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#a4a4a9",
                }}
              >
                Beef burger
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 28,
                marginLeft: 80,
              }}
            >
              $12.99
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: "#000",
            height: 50,
            width: 50,
            bottom: 20,
            marginTop: 25,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 25,
          }}
        >
          <Ionicons name="cart" size={24} color="#FFF" />
        </View>
      </View>
    );
  }
}
