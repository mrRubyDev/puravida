export enum DietStackScreenNames {
  DietOverview = "DietOverview",
  DietDetails = "DietDetails",
}

export type DietStackNavigatorParamList = {
  [DietStackScreenNames.DietOverview]: undefined;
  [DietStackScreenNames.DietDetails]: undefined;
};
