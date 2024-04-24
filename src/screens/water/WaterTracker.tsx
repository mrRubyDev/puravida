import React, { useCallback, useRef, useState } from "react";
import FullScreen from "../../components/FullScreen";
import {
  CircularProgressBar,
  Divider,
  Text,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome6 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  RootStackParamList,
  RootStackScreens,
} from "../../navigation/RootStackTypes";
import AddWater from "./AddWater";

const waterOptions = [
  "200ml",
  "400ml",
  "600ml",
  "800ml",
  "1000ml",
  "1200ml",
  "1400ml",
  "1600ml",
  "1800ml",
  "2000ml",
];

export default function WaterTracker() {
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const [maxAmountOfWater, setMaxAmountOfWater] = useState(2000);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleUndo = useCallback(
    (amount: number) => {
      if (progress === 0) {
        return;
      }
      setProgress(progress - Math.min(amount, progress));
    },
    [progress]
  );

  const handleFullAmount = useCallback(() => {
    setProgress(maxAmountOfWater);
  }, [progress, maxAmountOfWater]);

  const handleAddAmount = useCallback(
    (amount: number) => {
      if (progress + amount > maxAmountOfWater) {
        handleFullAmount();
        return;
      }
      setProgress(progress + amount);
    },
    [progress, handleFullAmount]
  );

  const editTotalWaterIcon = useCallback(() => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RootStackScreens.WaterEditor);
        }}
      >
        <FontAwesome6
          name="edit"
          size={24}
          color={theme["color-primary-600"]}
        />
      </TouchableOpacity>
    );
  }, [progress]);

  return (
    <FullScreen>
      <TopNavigation
        title="Water Tracker"
        alignment="center"
        accessoryRight={editTotalWaterIcon}
      />
      <Divider />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.progressContainer}>
          <AnimatedCircularProgress
            size={200}
            width={12}
            arcSweepAngle={130}
            fill={(progress / maxAmountOfWater) * 100}
            tintColor={theme["color-primary-600"]}
            backgroundColor="lightgrey"
            rotation={295}
            lineCap="round"
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text category="h3">{progress}</Text>
            <Text category="s1" style={{ color: "grey" }}>
              of {maxAmountOfWater}
            </Text>
          </View>
        </View>
        <AddWater
          handleAddAmount={handleAddAmount}
          handleFullAmount={handleFullAmount}
          handleUndo={handleUndo}
        />
        <View style={{ flex: 1 }} />
      </ScrollView>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
  },
});
