import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface FullScreenProps {
  canGoBack?: boolean;
  title?: string;
  children: React.ReactNode;
}

export default function FullScreen({
  canGoBack = false,
  title,
  children,
}: FullScreenProps) {
  const navigation = useNavigation<NavigationProp<any>>();
  const backArrow = () => (
    <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
  );
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#F9FCF9" }}
    >
      {canGoBack && (
        <TopNavigation
          style={{ backgroundColor: "transparent" }}
          title={title}
          alignment="center"
          accessoryLeft={() => (
            <TopNavigationAction
              icon={backArrow}
              onPress={() => {
                navigation.goBack();
              }}
            />
          )}
        />
      )}
      <Layout style={{ flex: 1 }}>{children}</Layout>
    </SafeAreaView>
  );
}
