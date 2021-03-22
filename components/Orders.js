import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Touchable,
  TextInput,
  Modal,
  Button,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import LoginModal from "../screens/LoginModal";
import Register from "../screens/Register";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const DHeight = Dimensions.get("window").height;
const Screen = ({ navigation }) => {
  return (
    <Animated.View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "black",
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Previous Orders
      </Text>

      <Text
        style={{
          color: "black",
          fontFamily: "Arial",
          fontWeight: "300",
          fontSize: 15,
          marginTop: "3%",
          justifyContent: "center",
        }}
      >
        Login to see previous Orders
      </Text>

      <View style={{ marginTop: "3%", width: "80%" }}>
        <TouchableOpacity
          style={{
            height: 42,
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D86F04",
            borderRadius: 40,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.errorTextStyle}></Text>
    </Animated.View>
  );
};
const Orders = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Screen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Stack.Screen
        name="Sign In"
        component={LoginModal}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={Register}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: "center",
    color: "red",
    marginTop: "5%",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    height: 300,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
};
export default Orders;
