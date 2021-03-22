import React, { Component, StrictMode } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import IconLabel from "./IconLabel";

const ResturantCard = ({
  image,
  title,
  categoryText,
  deliveryTime,
  distance,
  imageIcon,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={image} />
      <View
        style={{
          marginTop: -40,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image source={imageIcon} style={{ width: 40, height: 40 }} />
      </View>
      <View style={styles.infoStyle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.categoryStyle}>{categoryText}</Text>
        <View style={styles.iconLabelStyle}>
          <IconLabel name={"time-outline"} label={deliveryTime} color={"red"} />
          <IconLabel name={"pin-outline"} label={distance} color={"red"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: -25,
            marginLeft: 195,
          }}
        >
          <IconLabel name={"star-outline"} label={"5"} color={"green"} />
          <Text style={{ marginRight: 20 }}>(8k+)</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#98A357",
          width: Devicewidth - 100,
          height: 45,
          marginTop: 2,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            Friday Offer - 20% off when
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            you spend $20
          </Text>
        </View>
      </View>
    </View>
  );
};
const Devicewidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  cardContainer: {
    width: Devicewidth - 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 240,
    margin: 5,
  },
  imageStyle: {
    height: 110,
    width: Devicewidth - 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.9,
  },
  title: {
    fontSize: 15,
    fontWeight: "900",
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: "column",
    marginTop: 5,
  },
});

export default ResturantCard;
