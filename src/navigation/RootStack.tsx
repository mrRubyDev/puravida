import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList, RootStackScreens } from "./RootStackTypes";
import WaterEditor from "../screens/water/WaterEditor";
import BottomTabNavigator from "./BottomTabNavigator";

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RootStackScreens.BottomTabs}
    >
      <RootStack.Screen
        name={RootStackScreens.WaterEditor}
        component={WaterEditor}
      />
      <RootStack.Screen
        component={BottomTabNavigator}
        name={RootStackScreens.BottomTabs}
      />
    </RootStack.Navigator>
  );
}
