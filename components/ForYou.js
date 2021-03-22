import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import ImageCard from "./ImageCard";
import PaymentScreen from "./PaymentScreen";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Transition } from "react-native-reanimated";

const Root = createStackNavigator();
const ImageView = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../assest/foodone.png")}
        style={{
          width: 50,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};
const Screen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 25,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Save with free delivery
      </Text>
      <Text
        style={{ fontSize: 15, margin: 15, justifyContent: "center", flex: 1 }}
      >
        We don't have any personalised offers for you today, but you could still
        pocket a tasty saving with free delivery on your order.
      </Text>
    </View>
  );
};

const ForYou = () => {
  return (
    <Root.Navigator
      initialRouteName="For you"
      screenOptions={({ route }) => {
        return {
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        };
      }}
      mode="modal"
    >
      <Root.Screen
        name="For you"
        component={ImageCard}
        options={{
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "white",
            height: 100,
            shadowColor: "black",
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 9,
          },
          headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          headerRight: () => <ImageView />,
        }}
      />
      <Root.Screen
        name="Payment Screen"
        component={PaymentScreen}
        options={{
          headerTintColor: "black",
          headerTitle: false,
          headerRight: false,
          cardOverlayEnabled: true,
        }}
      />
    </Root.Navigator>
  );
};

export default ForYou;
