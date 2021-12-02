import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes, TabBarRoutes } from "./app.routes";
import { useAuth } from "../hook/auth";



export function Routes() {
  const user = useAuth();
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}