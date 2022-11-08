import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from "./Profile";
import HomeScreen from "./Home";
import ActivityScreen from "./Activity";
import MessagesScreen from "./Messages";

// Screen that will introduce the menu bar
const Tab = createBottomTabNavigator();

const NavBarTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default NavBarTabs