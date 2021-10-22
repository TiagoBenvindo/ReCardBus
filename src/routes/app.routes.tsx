import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";
import { SingIn } from "../screens/SingIn";
import { AddAccount } from "../screens/AddAccount";
import { Home } from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

type RootStackParamsList = {
  SingIn: undefined;
  Home: { userId: string };
  AddAccount: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>();
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
        name='SingIn'
        component={SingIn}
      />
      <Screen
        name='AddAccount'
        component={AddAccount}
      />
      <Screen
        name='Home'
        component={Home}
      />
    </Navigator>
  )
}

export function TabBarRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.green100,
        tabBarInactiveBackgroundColor: theme.colors.green100,
        tabBarActiveTintColor: theme.colors.whiteLight,
        tabBarIcon: ({ color, size }) => {
          let icon;

          switch (route.name) {
            case "Início":
              icon = <MaterialCommunityIcons name={'home-outline'} size={size} color={color} />;
              break;
            case "Histórico":
              icon = <MaterialIcons name={'assignment'} size={size} color={color} />;
              break;
            case "Tarifas":
              icon = <MaterialCommunityIcons name={'currency-usd-circle-outline'} size={size} color={color} />;
              break;
            case "Sair":
              icon = <MaterialIcons name={'logout'} size={size} color={color} />;
              break;
            default:
              icon = <MaterialIcons name={'circle'} size={size} color={color} />;
          }
          return icon
        }
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Histórico" component={Home} />
      <Tab.Screen name="Tarifas" component={Home} />
      <Tab.Screen name="Sair" component={Home} />
    </Tab.Navigator>
  )
}
