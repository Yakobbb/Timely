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
        <Tab.Screen name="Home" component={HomeScreen} options={headerStyle}/>
        <Tab.Screen name="Activity" component={ActivityScreen} options={headerStyle}/>
        <Tab.Screen name="Messages" component={MessagesScreen} options={headerStyle}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={headerStyle}/>
    </Tab.Navigator>
  );
}

export default NavBarTabs

const headerStyle = {
  headerTitleAlign: 'left',
  headerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey'
  },
  headerTitleStyle: {
    color: '#133B60',
    fontSize: 30,
  }
  }