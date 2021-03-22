import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./components/SplashScreen";
import Resutrants from "./components/Resturants";
import Orders from "./components/Orders";
import Settings from "./components/Settings";
import ForYou from "./components/ForYou";
import Login from "./screens/LoginModal";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
export default function App() {
  const [state, changeState] = useState("SplashScreen");
  useEffect(() => {
    setTimeout(() => {
      changeState("Resturants");
    }, 6000);
  });
  if (state == "SplashScreen") {
    return <SplashScreen />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Account") {
                  iconName = focused ? "person" : "person-outline";
                } else if (route.name === "Orders") {
                  iconName = focused ? "receipt" : "receipt-outline";
                } else if (route.name === "For you") {
                  iconName = focused ? "gift" : "gift-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#D86F04",
              inactiveTintColor: "green",
            }}
          >
            <Tab.Screen name="Home" component={Resutrants} />
            <Tab.Screen name="For you" component={ForYou} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Account" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8C00",

    alignItems: "center",
    justifyContent: "center",
  },
});
