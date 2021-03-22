import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Card = ({ name, star, bgColor, icon }) => {
  return (
    <View style={styles.item}>
      <View style={styles.image_container}>
        <Image source={icon} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#D86F04",
    margin: 10,
    width: "70%",
    height: 150,
    alignContent: "center",

    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "center",
  },
  image_container: {
    width: 150,
    height: 150,
  },
  image: {
    width: "100%",

    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  rating: {
    marginTop: 5,
    flexDirection: "row",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  price_container: {
    flexDirection: "row",
    marginTop: 10,
  },
  price: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textPrice: {
    color: "green",
    fontWeight: "bold",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    marginTop: 10,
  },
});
export default Card;
