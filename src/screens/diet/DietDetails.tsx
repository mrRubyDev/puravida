import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import FullScreen from "../../components/FullScreen";

export default function DietDetails() {
  return (
    <FullScreen canGoBack>
      <Layout style={{ flex: 1 }}>
        <Text category="h1">Diet Details</Text>
      </Layout>
    </FullScreen>
  );
}
