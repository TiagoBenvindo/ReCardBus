import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";
import { SingIn } from "../screens/SingIn";
import { AddAccount } from "../screens/AddAccount";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.whiteDefault
        }
      }}
    >
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='SingIN'
        component={SingIn}
      />
      <Screen
        name='AddAccount'
        component={AddAccount}
      />
    </Navigator>
  )
}
