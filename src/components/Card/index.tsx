import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Saldo atual
      </Text>
      <Text style={styles.content}>
        R$39,00
      </Text>
    </View>
  )
}