import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font' //Use hook to import fonts
import { useEffect } from 'react';

//Prevents the splash screen from automatically disappearing
//SplashScreen -> initial screen that shows up when your app is loading. 
//preventAutoHideAsync() -> telling the app to keep the splash screen visible until you explicitly tell it to hide.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({ //Load fonts
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    })
    //USE EFFECT HOOK: action while the page is loading
    useEffect(() =>{
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync(); //Splash screen coming from expo router, therefore export

    }, [fontsLoaded, error])

    //If fonts not loaded ans theres o error something is wrong and return null
    if(!fontsLoaded && !error) return null;

    return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
    )
}

export default RootLayout