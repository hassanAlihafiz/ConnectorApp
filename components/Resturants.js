import React, { useState } from "react";
import {
  TouchableHighlight,
  StatusBar,
  Text,
  Image,
  Modal,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Card from "./Card";
import ResturantCard from "./ResturantCard";
import Search from "./SearchBar";
import SearchScreen from "./SearchScreen";
import ItemList from "./ItemList";
import DetailScreen from "./DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeContent = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Search name={"Search by passcode"} />

        {/* Category */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: "row",
            margin: 5,
            width: "100%",
          }}
        >
          <Card icon={require("../assest/Deal1.jpg")} />
          <Card icon={require("../assest/Deal2.jpg")} />
          <Card icon={require("../assest/Deal1.jpg")} />
          <Card icon={require("../assest/Deal2.jpg")} />
          <Card icon={require("../assest/Deal1.jpg")} />
          <Card icon={require("../assest/Deal2.jpg")} />
        </ScrollView>

        {/* Ordering Text */}
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            padding: 5,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Resturants</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 60,
              justifyContent: "center",
              marginLeft: 3,
              color: "green",
            }}
          >
            View All
          </Text>
        </View>
        {/* Resturant Cards */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Resturants", {
                title: "KFC",
              })
            }
          >
            <ResturantCard
              image={require("../assest/meatPizza.png")}
              title={"KFC Sea View Branch"}
              categoryText="Pizza, Burgers, FastFoods"
              deliveryTime={"35 min"}
              distance={"3.7 km"}
              imageIcon={require("../assest/kfc.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Resturants", {
                title: "KFC Sea View Branch",
              })
            }
          >
            <ResturantCard
              image={require("../assest/meatPizza.png")}
              title={"KFC Sea View Branch"}
              categoryText="Pizza, Burgers, FastFoods"
              deliveryTime={"35 min"}
              distance={"3.7 km"}
              imageIcon={require("../assest/kfc.png")}
            />
          </TouchableOpacity>
        </ScrollView>
        {/* Grocery Stores */}
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            padding: 5,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Grocery Stores
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 60,
              justifyContent: "center",
              marginLeft: 3,
              color: "green",
            }}
          >
            View All
          </Text>
        </View>
        {/* Grocery Card */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Resturants", {
                title: "KFC",
              })
            }
          >
            <ResturantCard
              image={require("../assest/meatPizza.png")}
              title={"UKDEL Branch"}
              categoryText="Pizza, Burgers, FastFoods"
              deliveryTime={"35 min"}
              distance={"3.7 km"}
              imageIcon={require("../assest/kfc.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Resturants", {
                title: "KFC Sea View Branch",
              })
            }
          >
            <ResturantCard
              image={require("../assest/meatPizza.png")}
              title={"KFC Sea View Branch"}
              categoryText="Pizza, Burgers, FastFoods"
              deliveryTime={"35 min"}
              distance={"3.7 km"}
              imageIcon={require("../assest/kfc.png")}
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const Resturants = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeContent}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Resturants"
        component={ItemList}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#D86F04" },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    width: "90%",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    width: "100%",
    height: 50,
    color: "black",
    marginLeft: 10,
  },
  iconSearch: {
    marginLeft: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Resturants;
