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
const Register = ({ navigation }) => {
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
            style={{ width: 120, height: 214, marginTop: 10 }}
          />
        </View>
      </View>

      {/* First Name */}
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
        <Ionicons name="person-outline" size={25} />
        <TextInput
          placeholder={"Username"}
          style={{
            height: 42,
            width: "80%",
            marginLeft: 10,
            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        ></TextInput>
      </View>

      {/* PNumber */}
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
        <Ionicons name="call-outline" size={25} />
        <TextInput
          placeholder={"Phone Number"}
          style={{
            height: 42,
            width: "80%",
            marginLeft: 10,
            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        ></TextInput>
      </View>

      {/* Country */}
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
        <Ionicons name="flag-outline" size={25} />
        <TextInput
          placeholder={"Country"}
          style={{
            height: 42,
            width: "80%",
            marginLeft: 10,
            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        ></TextInput>
      </View>

      {/* Email */}
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
      {/* Password */}
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

      {/* Sign Up Button */}
      <View
        style={{
          width: "100%",
          marginTop: 40,
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
            Sign Up
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
          margin: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Sign In")}
          style={{ justifyContent: "center", alignSelf: "center" }}
        >
          <Text
            style={{
              color: "#D86F04",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Sign In
          </Text>
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
export default Register;
