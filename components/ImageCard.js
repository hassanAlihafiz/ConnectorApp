import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
const ImageCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={{ width: "100%", height: "60%", borderRadius: 10 }}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Title style={{ fontWeight: "800", fontSize: 15 }}>
            Show them you care the tasty way
          </Title>
          <Paragraph style={{ fontWeight: "500" }}>
            Whether you're treating Mum to her friday favourite, or suprising a
            mate with a dish they've never tired, treat them with a UKDEL gift
            card.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate("Payment Screen")}>
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              Get your gift card
            </Text>
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
export default ImageCard;
