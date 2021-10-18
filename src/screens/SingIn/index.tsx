import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongInput } from "../../components/LongInput";
import { LongButton } from "../../components/LongButton";
import { useNavigation } from "@react-navigation/native";

export function SingIn() {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>

        <Text style={styles.textTitle}>
          Recardbus
        </Text>
        <View>
          <Text style={styles.label}>CPF(SOMENTE NÚMEROS)</Text>
          <LongInput
            keyboardType="numeric"
          />
          <Text style={styles.label}>SENHA</Text>
          <LongInput secureTextEntry />
          <LongButton
            title='Entrar'
            onPress={() => navigation.navigate("TabBar")}
          />
        </View>
        <View style={styles.sectionNewAccount}>
          <Text style={styles.textAgroupButton}>
            Ainda não possui uma conta?
          </Text>
          <Text
            style={styles.textButton}
            onPress={() => navigation.navigate("AddAccount")}
          >
            Crie uma agora
          </Text>
        </View>
      </View>
    </Background>
  );
}
