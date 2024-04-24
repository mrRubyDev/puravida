import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Text } from "@ui-kitten/components";
import React from "react";
import {
  DietStackNavigatorParamList,
  DietStackScreenNames,
} from "../../navigation/diet/types";
import FullScreen from "../../components/FullScreen";

export default function DietOverview() {
  const navigation =
    useNavigation<NavigationProp<DietStackNavigatorParamList>>();

  return (
    <FullScreen>
      <Text category="h1">Diet Overview</Text>
      <Button
        onPress={() => {
          navigation.navigate(DietStackScreenNames.DietDetails);
        }}
      >
        Diet Details
      </Button>
    </FullScreen>
  );
}
