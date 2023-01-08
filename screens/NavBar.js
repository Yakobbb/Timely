import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from "./Feed";
import MessagesScreen from "./Messages";
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { ProfileIcon } from "../assets/svg/profilesetup";

// Screen that will introduce the menu bar
const Tab = createBottomTabNavigator();

const NavBarTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          // Quick fix for styling... eventually should be using the headerStyle variable
          headerTitleAlign: 'left',
          headerStyle: {
            borderBottomWidth: 2,
            borderBottomColor: 'lightgrey'
          },
          headerTitleStyle: {
            color: '#133B60',
            fontSize: 30,
          },
          headerRight: () => (
            <TouchableOpacity>
              <ProfileIcon />
            </TouchableOpacity>
          ),
        }}
      />
        <Tab.Screen name="Messages" component={MessagesScreen} options={headerStyle}/>
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