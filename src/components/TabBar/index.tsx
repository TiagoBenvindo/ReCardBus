import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { SingIn } from "../../screens/SingIn";


const { Navigator, Screen } = createBottomTabNavigator();
export function TabBar() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.green100,
        tabBarInactiveBackgroundColor: theme.colors.green100,
        tabBarActiveTintColor: theme.colors.whiteLight,
        tabBarIcon: ({ color, size }) => {
          let icon;

          switch (route.name) {
            case "Início":
              icon = <Feather name={'home'} size={size} color={color} />;
              break;
            case "Histórico":
              icon = <Feather name={'dollar-sign'} size={size} color={color} />;
              break;
            case "Tarifas":
              icon = <Feather name={'file-text'} size={size} color={color} />;
              break;
            case "Sair":
              icon = <Feather name={'log-out'} size={size} color={color} />;
              break;
            default:
              icon = <Feather name={'circle'} size={size} color={color} />;
          }
          return icon
        }
      })}
    >
      <Screen name="Início" component={SingIn} />
      <Screen name="Histórico" component={SingIn} />
      <Screen name="Tarifas" component={SingIn} />
      <Screen name="Sair" component={SingIn} />
    </Navigator>
  )
}


