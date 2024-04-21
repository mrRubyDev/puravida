import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Layout, Text, useTheme } from "@ui-kitten/components";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";

import { BlurView } from "expo-blur";

import {
  MaterialCommunityIcons,
  FontAwesome6,
  FontAwesome,
} from "@expo/vector-icons";

enum BottomTabScreenNames {
  Exercise = "Exercise",
  Diet = "Diet",
  Water = "Water",
  Profile = "Profile",
}

export type BottomTabNavigatorParamList = {
  [BottomTabScreenNames.Exercise]: undefined;
  [BottomTabScreenNames.Diet]: undefined;
  [BottomTabScreenNames.Water]: undefined;
  [BottomTabScreenNames.Profile]: undefined;
};

const BottomNav = createBottomTabNavigator<BottomTabNavigatorParamList>();

const HomeScreen = () => (
  <Layout
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    }}
  >
    <Text category="h1">PURA VIDA</Text>
    <Button disabled>Trying pura vida</Button>
  </Layout>
);

export default function BottomTabNavigator() {
  const theme = useTheme();

  const iconColor = useCallback((isFocused: boolean) => {
    return isFocused ? theme["color-primary-500"] : theme["color-basic-600"];
  }, []);

  return (
    <BottomNav.Navigator
      initialRouteName={BottomTabScreenNames.Exercise}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <BlurView
            intensity={70}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          />
        ),
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: 20,
        },
      }}
    >
      <BottomNav.Screen
        name={BottomTabScreenNames.Exercise}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color={iconColor(focused)}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name={BottomTabScreenNames.Diet}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="bowl-food"
              size={24}
              color={iconColor(focused)}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name={BottomTabScreenNames.Water}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="bottle-water"
              size={24}
              color={iconColor(focused)}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name={BottomTabScreenNames.Profile}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={24} color={iconColor(focused)} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
}
