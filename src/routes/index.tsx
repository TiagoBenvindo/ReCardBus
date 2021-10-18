import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes, TabBarRoutes } from "./app.routes";

const user = true;
export function Routes() {
  return (
    <NavigationContainer>
      {user ? <TabBarRoutes /> : <AppRoutes />}

    </NavigationContainer>
  )
}