export enum RootStackScreens {
  BottomTabs = "BottomTabs",
  WaterEditor = "WaterEditor",
}

export type RootStackParamList = {
  [RootStackScreens.BottomTabs]: undefined;
  [RootStackScreens.WaterEditor]: undefined;
};
