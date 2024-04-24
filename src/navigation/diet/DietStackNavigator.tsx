import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DietOverview from "../../screens/diet/DietOverview";
import DietDetails from "../../screens/diet/DietDetails";
import { DietStackNavigatorParamList, DietStackScreenNames } from "./types";

const DietStack = createStackNavigator<DietStackNavigatorParamList>();

export default function DietStackNavigator() {
  return (
    <DietStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DietStack.Screen
        name={DietStackScreenNames.DietOverview}
        component={DietOverview}
      />
      <DietStack.Screen
        name={DietStackScreenNames.DietDetails}
        component={DietDetails}
      />
    </DietStack.Navigator>
  );
}
