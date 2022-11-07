/*
    This file was created to fix the following bug when starting the Expo server:
    
    Metro has encountered an error: While trying to resolve module 'idb' from firebase...

    The code below was pasted from this post: https://stackoverflow.com/questions/72158122/expo-firebase-authentication-while-trying-to-resolve-module-idb-from-file
*/

const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");
module.exports = defaultConfig;