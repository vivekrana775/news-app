import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../app/screens/HomeScreen";
import AccountScreen from "../app/screens/AccountScreen";

import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let colorr;

          if (route.name === "HomeScreen") {
            iconName = "home-account";
            focused ? (colorr = "blue") : "#d6d2d2";
          }

          if (route.name === "AccountScreen") {
            iconName = "account";
            focused ? (colorr = "blue") : "#d6d2d2";
          }

          return (
            <MaterialCommunityIcons name={iconName} color={colorr} size={32} />
          );
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarLabel: () => {
          return null;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "blue",
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />

      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    borderTopWidth: 0,
    bottom: 5,
    backgroundColor: "transparent",
    elevation: 0,
  },
});
