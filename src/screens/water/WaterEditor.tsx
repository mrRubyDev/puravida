import React from "react";
import FullScreen from "../../components/FullScreen";
import { Divider, Text } from "@ui-kitten/components";
import { View } from "react-native";

export default function WaterEditor() {
  return (
    <FullScreen canGoBack>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16 }}>
        <Text category="s1" style={{ marginTop: 8 }}>
          Stay Hydrated!
        </Text>
        <Text category="h3">Set your daily goal</Text>
        <Text category="p1" style={{ marginTop: 24 }}>
          Staying well-hydrated helps improve mood, energy, and overall health.
          The average recommendation is about 8 glasses (64 ounces) per day, but
          this might vary based on your activity level and personal health
          needs.
        </Text>
      </View>
    </FullScreen>
  );
}
