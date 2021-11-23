import React from "react";
import { Text, View } from "react-native";
import { LongButton } from "../../components/LongButton";
import { styles } from "./styles";

export function Logout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deseja realmente sair?
      </Text>
      <View style={styles.form}>
        <View style={styles.middleButton}>
          <LongButton
            title="Não"
          />
        </View>
        <View style={styles.middleButton}>
          <LongButton
            title="Sim"
          />
        </View>
      </View>
    </View>

  )
}