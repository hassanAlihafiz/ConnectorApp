import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import LoginModal from "../screens/LoginModal";
import Register from "../screens/Register";
import Help from "../screens/Help";
import Country from "../screens/Country";
import Term from "../screens/Terms";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import CookiesPolicy from "../screens/CookiesPolicy";
import Eula from "../screens/Eula";
const ScreenView = ({ navigation, state }) => {
  const [userLogin, setUserLogin] = useState(true);
  const renderUser = () => {
    if (userLogin) {
      return (
        <View
          style={{
            marginTop: 10,
            justifyContent: "flex-start",
            flexDirection: "column",
            marginLeft: 50,
            padding: 5,
          }}
        >
          <Ionicons name="person" size={70} color={"black"} />
          <Text style={{ fontSize: 15, fontWeight: "200", margin: 5 }}>
            Hassan Ali
          </Text>
        </View>
      );
    }
  };

  return (
    <ScrollView>
      {renderUser()}
      <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
        <View
          style={{
            height: 25,
            margin: 10,

            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              color: "black",
              fontWeight: "400",
            }}
          >
            Help
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Help")}>
            <Ionicons
              name="chevron-forward-outline"
              color={"blue"}
              size={25}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 25,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            How are we doing?
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            color={"blue"}
            size={25}
            style={{ alignItems: "flex-end" }}
          />
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
        <View
          style={{
            height: 25,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Country
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Country")}>
            <Ionicons
              name="chevron-forward-outline"
              color={"blue"}
              size={25}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
        <View
          style={{
            height: 25,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Terms and Condition
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Terms and Conditions")}
          >
            <Ionicons
              name="chevron-forward-outline"
              color={"blue"}
              size={25}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 25,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Privacy Policy
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Privacy Policy")}
          >
            <Ionicons
              name="chevron-forward-outline"
              color={"blue"}
              size={25}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 25,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            EULA
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("EULA")}>
            <Ionicons
              name="chevron-forward-outline"
              color={"blue"}
              size={25}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 25,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Cookies Policy
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cookies Policy")}
          >
            <Ionicons
              name="chevron-forward-outline"
              color={"blue"}
              size={25}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
          <View
            style={{
              height: 25,
              margin: 10,
              alignItems: "center",
              padding: 3,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                alignItems: "flex-start",
                fontSize: 15,
                fontWeight: "400",
              }}
            >
              Login
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const Root = createStackNavigator();
const Settings = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Settings"
        component={ScreenView}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Login"
        component={LoginModal}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Sign Up"
        component={Register}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Help"
        component={Help}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Country"
        component={Country}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Terms and Conditions"
        component={Term}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="Cookies Policy"
        component={CookiesPolicy}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Root.Screen
        name="EULA"
        component={Eula}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
    </Root.Navigator>
  );
};

export default Settings;
