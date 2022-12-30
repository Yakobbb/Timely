import { getAuth } from "firebase/auth";
import React from "react";
import { ScrollView, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const auth = getAuth();
const user = auth.currentUser;

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
            <ScrollView style={styles.container}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{width: 40, height: 40}}>
                    
                </TouchableOpacity>
                <Image style={{width: 200, height: 200, borderRadius: 100}}
                source={require('../assets/testuser/profilePic.jpg')}/>
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