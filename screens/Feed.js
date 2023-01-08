import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const FeedScreen = () => {
    return (
        <View>
            <Image style={{width: 362, height: 548, borderRadius: 20}}
                source={require('../assets/tennisPlaying.jpeg')}/>
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        
    }
})