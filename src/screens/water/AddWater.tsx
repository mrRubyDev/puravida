import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, Text, useTheme } from "@ui-kitten/components";
import React, { useCallback, useRef, useState } from "react";

import { Animated, FlatList, Pressable, View } from "react-native";

const amountWidth = 80;
const waterOptions = [100, 250, 500, 750, 1000, 1250, 1500, 1750, 2000];

interface AddWaterProps {
  handleAddAmount: (amount: number) => void;
  handleFullAmount: () => void;
  handleUndo: (amount: number) => void;
}

export default function AddWater({
  handleAddAmount,
  handleFullAmount,
  handleUndo,
}: AddWaterProps) {
  const theme = useTheme();
  const [selectedAmount, setSelectedAmount] = useState(waterOptions[1]);
  const bottomLineAnimation = useRef(new Animated.Value(50)).current;
  const flatListRef = useRef<FlatList<number>>(null);

  const handleScaleUp = useCallback(() => {
    Animated.timing(bottomLineAnimation, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [bottomLineAnimation]);

  const handleAmountChange = useCallback(
    (amount: number, index: number) => {
      setSelectedAmount(amount);
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: index * amountWidth,
      });
      handleScaleUp();
    },
    [handleScaleUp]
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        horizontal
        style={{ maxHeight: 50 }}
        data={waterOptions}
        keyExtractor={(_, i) => i.toString()}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              handleAmountChange(item, index);
            }}
            style={{
              padding: 8,
              height: 40,
              width: amountWidth,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 4,
            }}
          >
            <Text
              style={{
                fontWeight: selectedAmount === item ? "bold" : "normal",
                color: selectedAmount === item ? "black" : "grey",
              }}
            >
              {item} ml
            </Text>
            {selectedAmount === item && (
              <Animated.View
                style={{
                  width: bottomLineAnimation,
                  marginTop: 4,
                  backgroundColor: theme["color-primary-700"],
                  height: 3,
                  borderRadius: 8,
                }}
              />
            )}
          </Pressable>
        )}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            handleUndo(selectedAmount);
          }}
          style={(state) => ({
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            borderRadius: 100,
            backgroundColor: state.pressed
              ? theme["color-primary-600"]
              : "lightgrey",
          })}
        >
          <FontAwesome name="minus" size={20} color="white" />
        </Pressable>
        <Pressable
          onPress={() => {
            handleAddAmount(selectedAmount);
          }}
          style={(state) => ({
            justifyContent: "center",
            alignItems: "center",
            height: 80,
            width: 80,
            borderRadius: 100,
            marginHorizontal: 12,
            backgroundColor: state.pressed
              ? theme["color-primary-600"]
              : "transparent",
          })}
        >
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={80}
            color={theme["color-primary-600"]}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleFullAmount();
          }}
          style={(state) => ({
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            borderRadius: 100,
            backgroundColor: state.pressed
              ? theme["color-primary-600"]
              : "lightgrey",
          })}
        >
          <FontAwesome name="check" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
