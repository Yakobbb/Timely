import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text>Login screen</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" value={ } onChangeText={text => } style={styles.input} />
                <TextInput placeholder="Password" value={ } onChangeText={text => } style={styles.input} />
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})