import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SingIn } from "../screens/SingIn";

export function Routes() {
  return (
    <NavigationContainer>
      <SingIn></SingIn>
    </NavigationContainer>
  )
}