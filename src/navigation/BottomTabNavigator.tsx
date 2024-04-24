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
import Diet from "../screens/Diet";
import DietStackNavigator from "./diet/DietStackNavigator";
import WaterTracker from "../screens/water/WaterTracker";

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

export default function BottomTabNavigator() {
  const theme = useTheme();

  const iconColor = useCallback((isFocused: boolean) => {
    return isFocused ? theme["color-primary-900"] : theme["color-basic-600"];
  }, []);

  return (
    <BottomNav.Navigator
      initialRouteName={BottomTabScreenNames.Water}
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
              backgroundColor: "rgba(139, 138, 138, 0.4)",
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
        component={Diet}
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
        component={DietStackNavigator}
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
        component={WaterTracker}
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
        component={Diet}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={24} color={iconColor(focused)} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
}
