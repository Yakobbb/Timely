import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CarouselCardItem = ({ item }) => {
  return (
    <>
      <View style={styles.image}>{item.img}</View>
      <Text style={styles.subHeader}>{item.subHeader}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    paddingTop: "15%",
    alignItems: "center",
  },
  subHeader: {
    paddingTop: "10%",
    textAlign: "center",
    fontSize: "28px",
  },
  body: {
    paddingTop: "7%",
    paddingLeft: "10%",
    paddingRight: "10%",
    textAlign: "center",
    fontSize: "20px",
  },
});

export default CarouselCardItem;
