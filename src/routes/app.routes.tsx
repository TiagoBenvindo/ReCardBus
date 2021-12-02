import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";
import { SingIn } from "../screens/SingIn";
import { AddAccount } from "../screens/AddAccount";
import { Home } from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Logout } from "../screens/Logout";
import { Tariffs } from "../screens/Tariffs";
import { Historic } from "../screens/Historic";
import { Group } from "react-native";
import { ChooseCard } from "../screens/ChooseCard";

export type RootStackParamsList = {
  SingIn: undefined;
  Home: { userId: string };
  AddAccount: undefined;
  ChooseCard: undefined;
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
        name='ChooseCard'
        component={ChooseCard}
      />
      <Screen
        name='Home'
        component={TabBarRoutes}
      />
      <Screen
        name='SingIn'
        component={SingIn}
      />
      <Screen
        name='AddAccount'
        component={AddAccount}
      />
    </Navigator>
  )
}

export function TabBarRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.whiteLight,
        tabBarStyle: { height: 64, backgroundColor: theme.colors.greenDark, paddingTop: 15 },
        tabBarLabelStyle: { paddingBottom: 13, },
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
      <Tab.Screen name="Histórico" component={Historic} />
      <Tab.Screen name="Tarifas" component={Tariffs} />
      <Tab.Screen name="Sair" component={Logout} />
    </Tab.Navigator>
  )
}
