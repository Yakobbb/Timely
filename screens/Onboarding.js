import React from "react";
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Tutorial from "../assets/svg/tutorial";
import FirstSlide from "../assets/svg/firstslide";

const OnboardingScreen = () => {
    const [fontsLoaded] = useFonts({
        'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View behavior="padding" style={styles.container}> 
            <Text style={styles.header}>How it works</Text>
            <View style={styles.image}>
                <Tutorial />
            </View>
            <Text style={styles.subHeader}>Browse the Feed</Text>
            <Text style={styles.body}>Swipe through the feed to see what activities other students want to do. You can on click that post to see more info and view their profile.</Text>
            <View style={styles.image}>
                <FirstSlide />
            </View>
        </View>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '20%',
    },
    header: {
        paddingLeft: '10%',
        fontWeight: 'bold',
        fontSize: '32px',
    },
    image: {
        paddingTop: '15%',
        alignItems: 'center'
    }, 
    subHeader: {
        fontFamily: 'SF-Pro-Display-Regular',
        paddingTop: '10%',

        textAlign: 'center',
        fontSize: '28px'
    },
    body: {
        fontFamily: 'SF-Pro-Display-Regular',
        paddingTop: '7%',
        paddingLeft: '10%',
        paddingRight: '10%',
        textAlign: 'center',
        fontSize: '20px'
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