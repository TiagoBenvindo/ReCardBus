import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SingIn } from "../screens/SingIn";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.whiteDefault
        }
      }}
    >
      <Screen
        name='SingIn'
        component={SingIn}

      />
    </Navigator>
  )
}