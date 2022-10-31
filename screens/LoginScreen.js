import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} style={styles.input} />
                <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry/>
                
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={[styles.button]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
    }
})