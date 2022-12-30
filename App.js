import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import OnboardingScreen from "./screens/Onboarding/Onboarding";
import NavBarTabs from "./screens/NavBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen options={{headerShown: false}} name = "HomeNavBar" component={NavBarTabs} />
        <Stack.Screen options={{headerShown: false}} name = "Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown: false}} name = "Login" component={LoginScreen} />
=======
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeNavBar"
          component={NavBarTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
>>>>>>> aef847cc08e8aec62dfeaa570aa3691960ddbf15
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
