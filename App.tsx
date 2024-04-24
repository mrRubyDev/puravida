import React, { useEffect } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as mapping } from "./mapping.json";
import * as theme from "./custom-theme.json";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStackNavigator from "./src/navigation/RootStack";

SplashScreen.preventAutoHideAsync();

export default () => {
  const [fontsLoaded, fontError] = Font.useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <SafeAreaProvider>
            <RootStackNavigator />
          </SafeAreaProvider>
        </ApplicationProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
