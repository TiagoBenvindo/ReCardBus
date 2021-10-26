import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes, TabBarRoutes } from "./app.routes";
import { SingIn } from "../screens/SingIn";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />

    </NavigationContainer>
  )
}