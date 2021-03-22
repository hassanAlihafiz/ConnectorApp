import React, { Component } from "react";
import {
  StatusBar,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Animated,
} from "react-native";
import ResturantCard from "./ResturantCard";

import { SearchBar } from "react-native-elements";

const Card = ({ itemName, description }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text style={styles.cardTitle}>{itemName}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const ItemList = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ResturantCard
          image={require("../assest/meatPizza.png")}
          title={route.params.title}
          categoryText="Pizza, Burgers, FastFoods"
          deliveryTime={"35 min"}
          distance={"3.7 km"}
          imageIcon={require("../assest/kfc.png")}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
        <SearchBar placeholder="Type Here..." platform="ios" disabled={true} />
      </TouchableOpacity>

      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
      <Card itemName={"Food Burger"} description={"BBQ, Fast Food"} />
    </ScrollView>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 50,
    marginVertical: 5,
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
