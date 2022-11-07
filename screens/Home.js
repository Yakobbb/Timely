import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from "./Profile";
import MessagesScreen from "./Messages";

// Screen that will introduce the menu bar
const HomeScreen = () => {
    return (
        <View>
            <Text>Home screen</Text>
        </View>
    )
}
// CODE BELOW NOT FUNCTIONAL
// const NavBar = createBottomTabNavigator();

// function NavBarTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Messages" component={MessagesScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

export default HomeScreen

const styles = StyleSheet.create({})