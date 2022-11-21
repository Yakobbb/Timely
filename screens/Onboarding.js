import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem from "./CarouselCardItem";
import data from "./data";
import { useFonts } from "expo-font";

const OnboardingScreen = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const [fontsLoaded] = useFonts({
    "SF-Pro-Display-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How it works</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
          style={styles.spacing}
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            marginTop: 40,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.emptyButton]}>
          <Text style={styles.buttonOutlineText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    fontFamily: "SF-Pro-Display-Regular",
  },
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingLeft: "10%",
    fontWeight: "bold",
    fontSize: "32px",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10%",
  },
  emptyButton: {
    flex: 1,
    maxWidth: "25%",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  button: {
    flex: 1,
    maxWidth: "25%",
    backgroundColor: "#133B60",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#133B60",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#133B60",
    fontWeight: "700",
    fontSize: 16,
  },
});
