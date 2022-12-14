import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { app } from "../firebase";
import OnboardingScreen from "./Onboarding/Onboarding";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const auth = getAuth(app)

    const handleEmailRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user
            navigation.navigate('Onboarding', { screen: 'OnboardingScreen' });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleEmailLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigation.navigate('HomeNavBar', { screen: 'Home' });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    // Google Cloud & API services currently just have the Expo Go Proxy client ID
    const handleGoogleSignIn = () => {
        const [accessToken, setAccessToken] = React.useState()
        const [userInfo, setUserInfo] = React.useState();

        const [request, response, promptAsync] = Google.useAuthRequest({

        });
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} style={styles.input} />
                <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry/>
                
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={[styles.button]} onPress={handleEmailLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleEmailRegister}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]} onPress={handleGoogleSignIn}>
                    <Image style={{width: 30, height: 30}} source={require('../assets/google_icon.png')}/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

// Basic styling below; eventually will be moved to separate file.. or removed based on Tailwind implementation
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 5
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button: {
        width: "100%",
        backgroundColor: "#133B60",
        padding: 15,
        marginTop: 10,
        borderRadius: 15,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 10,
        borderColor: "#133B60",
        borderWidth: 2
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutlineText: {
        color: "#133B60",
        fontWeight: "700",
        fontSize: 16
    },
})