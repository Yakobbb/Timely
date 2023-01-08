import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileImage } from "../assets/svg/profile";
import {
  SexIcon,
  LocationIcon,
  EducationIcon,
} from "../assets/svg/profileicons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileImage />
        <Text style={styles.name}>James Kupir</Text>
        <Text style={styles.subheader}>Overview</Text>
        <View style={styles.info}>
          <SexIcon style={{ flex: 1 }} />
          <Text style={styles.infotext}>Male, 20</Text>
        </View>
        <View style={styles.info}>
          <LocationIcon style={{ flex: 1 }} />
          <Text style={styles.infotext}>From Boulder, CO, USA</Text>
        </View>
        <View style={styles.info}>
          <EducationIcon style={{ flex: 1 }} />
          <Text style={styles.infotext}>Digital Media Studies, 2024</Text>
        </View>
        <Text style={styles.subheader}>About Me</Text>
        <Text style={styles.abouttext}>
          Hi There! I’m James, and I love to do photography. I started when I
          was 12 when my dad bought me my first camera, and I haven’t looked
          back since. I’d say I’m a pretty chill guy, love to to meet new
          people. It’d be great if I could learn to cook more or even find
          someone to shoot photos with on campus.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  name: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: "24px",
    fontWeight: "500",
    alignItems: "center",
  },
  subheader: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: "20px",
    fontWeight: "700",
    alignSelf: "flex-start",
  },
  info: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  infotext: {
    flex: 15,
    marginLeft: 10,
    fontSize: "16px",
    color: "#3D3F4C",
  },
  abouttext: {
    flex: 15,
    fontSize: "16px",
    color: "#3D3F4C",
  },
});
