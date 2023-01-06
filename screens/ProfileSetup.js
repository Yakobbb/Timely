import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ProfileIcon } from "../assets/svg/profilesetup";
import { useNavigation } from "@react-navigation/native";

const ProfileSetupScreen = () => {
  const navigation = useNavigation();

  const handleComplete = () => {
    navigation.navigate("HomeNavBar", { screen: "ProfileSetup" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Setup</Text>
      <Text style={styles.subheader}>
        Setup your profile so other users can get a sense of who you are and
        what you are all about.
      </Text>
      <ScrollView style={{ maxHeight: "65%" }}>
        <View style={styles.columns}>
          <ProfileIcon />
          <Text
            style={{
              flex: 1,
              marginVertical: 15,
              fontSize: "20px",
              fontWeight: "500",
              color: "#3B99D8",
              paddingBottom: 40,
            }}
          >
            Change profile photo
          </Text>
          <View style={styles.rows}>
            <Text style={styles.fullnameinfo}>Full Name</Text>
          </View>
          <View style={styles.rows}>
            <TextInput
              style={styles.longTextInput}
              placeholder="Write your full name here..."
            />
          </View>
          <View style={styles.rows}>
            <Text style={styles.sexinfo}>Sex</Text>
            <Text style={styles.ageinfo}>Age</Text>
          </View>
          <View style={styles.rows}>
            <TextInput style={styles.sex} placeholder="Your sex here..." />
            <TextInput style={styles.age} placeholder="Your age here..." />
          </View>
          <View style={styles.rows}>
            <Text style={styles.fullnameinfo}>Hometown</Text>
          </View>
          <View style={styles.rows}>
            <TextInput
              style={styles.longTextInput}
              placeholder="Your hometown here..."
            />
          </View>
          <View style={styles.rows}>
            <Text style={styles.majorinfo}>Major</Text>
            <Text style={styles.gradinfo}>Graduation Year</Text>
          </View>
          <View style={styles.rows}>
            <TextInput style={styles.major} placeholder="Your major here..." />
            <TextInput style={styles.grad} placeholder="Grad Year here..." />
          </View>
          <View style={styles.rows}>
            <Text style={styles.fullnameinfo}>About yourself</Text>
          </View>
          <View style={styles.rows}>
            <TextInput
              style={styles.longTextInput}
              placeholder="About yourself..."
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button]} onPress={handleComplete}>
            <Text style={styles.buttonText}>Complete Setup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    fontFamily: "SF-Pro-Display-Regular",
  },
  header: {
    paddingLeft: "10%",
    fontWeight: "bold",
    fontSize: "32px",
    color: "#133B60",
  },
  subheader: {
    marginTop: 30,
    marginBottom: 30,
    paddingRight: "5%",
    paddingLeft: "10%",
    fontWeight: "500",
    fontSize: "20px",
    color: "black",
  },
  columns: {
    flex: 5,
    alignItems: "center",
    flexDirection: "column",
    padding: "10%",
    paddingTop: "5%",
  },
  rows: {
    flex: 1,
    flexWrap: "wrap",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  fullnameinfo: {
    flex: 1,
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  sexinfo: {
    flex: 1.5,
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginRight: 15,
    marginBottom: 20,
  },
  ageinfo: {
    flex: 1,
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  sex: {
    flex: 1.5,
    width: "100%",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#D8DDE9",
    marginRight: 15,
    marginBottom: 20,
  },
  age: {
    flex: 1,
    width: "100%",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#D8DDE9",
    marginBottom: 20,
  },
  majorinfo: {
    flex: 1,
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginRight: 15,
    marginBottom: 20,
  },
  gradinfo: {
    flex: 1,
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  major: {
    flex: 1,
    width: "100%",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#D8DDE9",
    marginRight: 15,
    marginBottom: 20,
  },
  grad: {
    flex: 1,
    width: "100%",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#D8DDE9",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    maxWidth: "70%",
    backgroundColor: "#3B99D8",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  longTextInput: {
    width: "100%",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#D8DDE9",
    marginBottom: 20,
  },
});
