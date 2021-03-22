import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dialog, {
  SlideAnimation,
  DialogFooter,
  DialogButton,
  DialogContent,
  DialogTitle,
} from "react-native-popup-dialog";

const SearchBar = ({ name }) => {
  const [model, setModel] = useState(false);

  return (
    <View style={{ backgroundColor: "#E6E4E4", marginTop: 5 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setModel(true)}>
            <Ionicons
              style={styles.iconLocation}
              name="location"
              size={25}
              color={"#D86F04"}
            />
          </TouchableOpacity>

          <TextInput placeholder={name} style={styles.textInput}></TextInput>
        </View>
        <Ionicons
          style={styles.iconSearch}
          name="search"
          size={25}
          color={"black"}
        />
      </View>
      <View>
        <Dialog
          visible={model}
          dialogAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
          footer={
            <DialogFooter style={{ backgroundColor: "D86F04" }}>
              <DialogButton
                style={{ color: "white" }}
                text="CANCEL"
                onPress={() => setModel(false)}
              />
              <DialogButton text="OK" onPress={() => setModel(false)} />
            </DialogFooter>
          }
          dialogTitle={<DialogTitle title="Location" />}
          width={300}
          height={180}
        >
          <DialogContent
            style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}
          >
            <Text style={styles.text}>Can we use</Text>
            <Text style={styles.text}>your location?</Text>
          </DialogContent>
        </Dialog>
      </View>
    </View>
  );
};
export default SearchBar;
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
    borderRadius: 60,
    width: "90%",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    width: "100%",
    height: 40,
    color: "black",
    marginLeft: 10,
  },
  iconLocation: {
    marginLeft: 10,
  },
  iconSearch: {
    marginRight: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
