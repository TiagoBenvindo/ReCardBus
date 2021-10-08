import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { LongInput } from "../../components/LongInput";

export function SingIn() {
  return (
    <Background>
      <View style={styles.title}>
        <Text style={styles.textTitle}>
          ReCardBus
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ marginBottom: 4 }}>CPF(SOMENTE NÚMEROS)</Text>
        <LongInput
        />
        <Text style={{ marginBottom: 4 }}>SENHA</Text>
        <LongInput
        />
      </View>
    </Background>
  );
}
