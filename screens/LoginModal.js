import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const LoginModal = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.headerStyle}>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assest/Log.png")}
            style={{ width: 120, height: 214, marginTop: 20 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="mail-outline" size={25} />
        <TextInput
          placeholder={"Email"}
          style={{
            height: 42,
            width: "80%",
            marginLeft: 10,
            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        ></TextInput>
      </View>

      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="lock-closed-outline" size={25} />
        <TextInput
          placeholder={"Password"}
          style={{
            height: 42,
            width: "80%",
            marginLeft: 10,
            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        ></TextInput>
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 35,
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 42,
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            color: "white",
            backgroundColor: "#D86F04",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 30,

          justifyContent: "space-evenly",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 42,
            margin: 1,
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            color: "white",
            backgroundColor: "#4267B2",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 1,
            height: 42,
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            color: "white",
            backgroundColor: "#BB001B",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Gmail
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",

          marginTop: 60,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{ justifyContent: "center", alignSelf: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text
              style={{
                marginLeft: 5,
                color: "#D86F04",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    height: 250,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  textInputStyle: {
    margin: 20,
  },
});
export default LoginModal;
