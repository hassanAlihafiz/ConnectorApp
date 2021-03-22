import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Checkbox } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const PaymentScreen = () => {
  const [shallScreen, setShall] = useState(false);
  const [cardScreen, setCard] = useState(false);
  const [someelse, setSomeElse] = useState(false);
  const [me, setMe] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assest/meatPizza.png")}
        style={{ width: "100%", height: 150 }}
      />
      <View
        style={{
          marginTop: -25,
          height: "100%",
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ justifyContent: "center", flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#d86f04",
              alignSelf: "center",
              fontSize: 30,
            }}
          >
            THE UKDEL GIFT CARD
          </Text>
          <Text style={{ fontSize: 20, alignSelf: "center" }}>
            Make their day with a takeaway
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            borderBottomColor: "#74b72b",
            borderBottomWidth: 1,
          }}
        />

        <View style={{ margin: 6 }}>
          <Text style={{ fontSize: 18, marginLeft: 8 }}>Choose an amount</Text>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 10,
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
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                color: "white",
                backgroundColor: "#D86F04",
                alignSelf: "center",
              }}
              onPress={() => setShall(true)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                15
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 1,
                height: 42,
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                color: "white",
                backgroundColor: "#D86F04",
                alignSelf: "center",
              }}
              onPress={() => setShall(true)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                20
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 10,
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
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                color: "white",
                backgroundColor: "#D86F04",
                alignSelf: "center",
              }}
              onPress={() => setShall(true)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                25
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 1,
                height: 42,
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                color: "white",
                backgroundColor: "#D86F04",
                alignSelf: "center",
              }}
              onPress={() => setShall(true)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                30
              </Text>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 10,
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
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                color: "white",
                backgroundColor: "#D86F04",
                alignSelf: "center",
              }}
              onPress={() => setShall(true)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                40
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 1,
                height: 42,
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                color: "white",
                backgroundColor: "#D86F04",
                alignSelf: "center",
              }}
              onPress={() => setShall(true)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                50
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {shallScreen ? (
          <View style={{ margin: 6 }}>
            <Text style={{ fontSize: 18, marginLeft: 8 }}>
              Who shall we send it to?
            </Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 10,
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
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  color: "white",
                  backgroundColor: "#D86F04",
                  alignSelf: "center",
                }}
                onPress={() => {
                  setCard(true);
                  setSomeElse(true);
                  setMe(false);
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Someone else
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  margin: 1,
                  height: 42,
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  color: "white",
                  backgroundColor: "#D86F04",
                  alignSelf: "center",
                }}
                onPress={() => {
                  setMe(true);
                  setCard(true);
                  setSomeElse(false);
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {cardScreen ? (
          <View style={{ margin: 6 }}>
            <Text style={{ fontSize: 18, marginLeft: 8 }}>Gift card type</Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 10,
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
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  color: "white",
                  backgroundColor: "#D86F04",
                  alignSelf: "center",
                }}
                onPress={() => setShow(true)}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Digital (email)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  margin: 1,
                  height: 42,
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  color: "white",
                  backgroundColor: "#D86F04",
                  alignSelf: "center",
                }}
                onPress={() => setShow(true)}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Card (Post)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {me && cardScreen && show ? <MeScreen /> : null}
        {someelse && cardScreen && show ? <SomeoneElse /> : null}

        <View
          style={{
            marginTop: 10,
            borderBottomColor: "#74b72b",
            borderBottomWidth: 1,
          }}
        />

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            style={{
              margin: 1,
              height: 42,
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderRadius: 10,
              backgroundColor: "#D86F04",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Add to basket
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>Our </Text>
            <Text style={{ color: "#74b72b" }}>Terms & Conditions,</Text>
            <Text style={{ color: "#74b72b" }}>Privacy Policy</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>and </Text>
            <Text style={{ color: "#74b72b" }}>Coookie Policy</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SomeoneElse = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 8,
          marginTop: 5,
        }}
      >
        <Ionicons
          name="information-circle-outline"
          color={"#74b72b"}
          size={20}
          style={{ alignSelf: "center" }}
        />
        <Text style={{ fontSize: 15, marginLeft: 8, alignSelf: "center" }}>
          Sent by email, usually within 1 hour
        </Text>
      </View>

      <View style={{ marginTop: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 20 }}>Their name and email</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder={"First Name"}
          style={{
            height: 42,
            width: "100%",

            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        ></TextInput>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 15 }}>
        <Ionicons
          name="information-circle-outline"
          color={"#74b72b"}
          size={20}
          style={{ alignSelf: "center" }}
        />

        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text>We'all use their first name to personalise your gift. </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder={"Email"}
          style={{
            height: 42,
            width: "100%",

            borderBottomWidth: 1,
            borderColor: "#D86F04",
          }}
        />
      </View>
      <View style={{ marginTop: 15, marginLeft: 15 }}>
        <Text style={{ fontSize: 20 }}>Include a message</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          paddingVertical: 10,
          flexDirection: "row",
        }}
      >
        <Checkbox style={{ alignSelf: "center" }} status={false} />
        <Text style={{ fontSize: 18, alignSelf: "center" }}>
          Add something personal
        </Text>
      </View>
    </View>
  );
};

const MeScreen = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 8,
          marginTop: 5,
        }}
      >
        <Ionicons
          name="information-circle-outline"
          color={"#74b72b"}
          size={20}
          style={{ alignSelf: "center" }}
        />
        <Text style={{ fontSize: 15, marginLeft: 8, alignSelf: "center" }}>
          Sent by email, usually within 1 hour
        </Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 20 }}>Your email address</Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 15 }}>
        <Ionicons
          name="information-circle-outline"
          color={"#74b72b"}
          size={20}
          style={{ alignSelf: "center" }}
        />

        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text>We'all ask for the email address when you get</Text>
          <Text>to the checkout</Text>
        </View>
      </View>
      <View style={{ marginTop: 15, marginLeft: 15 }}>
        <Text style={{ fontSize: 20 }}>Include a message</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          paddingVertical: 10,
          flexDirection: "row",
        }}
      >
        <Checkbox style={{ alignSelf: "center" }} status={false} />
        <Text style={{ fontSize: 18, alignSelf: "center" }}>
          Add something personal
        </Text>
      </View>
    </View>
  );
};
export default PaymentScreen;
