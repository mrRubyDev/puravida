import React, { useCallback, useEffect } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
} from "@ui-kitten/components";
import { default as mapping } from "./mapping.json";
import * as theme from "./custom-theme.json";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => (
  <Layout
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text category="h1">PURA VIDA</Text>
    <Button disabled>Trying pura vida</Button>
  </Layout>
);

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
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <BottomTabNavigator />
      </ApplicationProvider>
    </NavigationContainer>
  );
};
