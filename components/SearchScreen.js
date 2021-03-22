import React, { useState } from "react";
import { Touchable } from "react-native";
import {
  Animated,
  Text,
  Alert,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  StyleSheet,
} from "react-native";
import { SearchBar } from "react-native-elements";

import Ionicons from "react-native-vector-icons/Ionicons";
const BodyScreen = ({ title, description, price, img }) => {
  return (
    <View style={{ marginTop: 10, backgroundColor: "#fff", borderRadius: 20 }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          height: 120,
          margin: 10,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            width: "65%",

            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "800" }}>{title}</Text>
          <Text style={{ marginVertical: 5 }}>{description}</Text>
          <Text style={{ color: "#98A357", marginVertical: 3 }}>{price}</Text>
        </View>
        <View style={{ width: "30%", justifyContent: "center" }}>
          <Image
            source={img}
            style={{
              width: 80,
              height: 108,
              justifyContent: "flex-end",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const SearchScreen = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const [query, setQuery] = useState("");
  const handleText = (e) => {
    setQuery(e);
  };

  return (
    <Animated.View>
      <View style={{ marginTop: 25 }}>
        <SearchBar
          placeholder="Search Deals"
          platform="ios"
          onChangeText={(e) => handleText(e)}
          value={query}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "column",
          margin: 5,

          width: "100%",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")}>
          <BodyScreen
            img={require("../assest/Deal.jpg")}
            title={"Royale Family"}
            description="Two chicken Royales, two large fries, two regular drinks, two kids
            meals and a large portion of onion rings"
            price={"£29.9"}
          />
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
export default SearchScreen;
