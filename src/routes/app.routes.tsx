import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";
import { SingIn } from "../screens/SingIn";

const { Navigator, Screen } = createStackNavigator();

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
        name='SingIN'
        component={SingIn}
      />
    </Navigator>
  )
}
