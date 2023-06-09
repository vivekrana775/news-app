import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import BottomTabNavigator from "../navigation/BottomTabNavigator";
import NewsDetailsScreen from "../app/screens/NewsDetailsScreen";

import { enableScreens } from "react-native-screens";

const Stack = createSharedElementStackNavigator();
const AuthNavigator2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator2;

const styles = StyleSheet.create({});
