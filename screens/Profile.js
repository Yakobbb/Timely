import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
            <ScrollView style={styles.container}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
})