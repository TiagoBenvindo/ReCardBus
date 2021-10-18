import React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { Card } from "../../components/Card";
import { LongButton } from "../../components/LongButton";
import { LongInput } from "../../components/LongInput";
import { styles } from "./styles";


export function Home() {
  return (
    <Background>
      <View style={styles.container}>
        <View>
          <View style={styles.presentation}>
            <Text style={styles.greeting}>
              Olá,
            </Text>
            <Text style={styles.name}>
              Marcos
            </Text>
          </View>
          <View style={styles.card}>
            <Card />
            <Card />
          </View>
          <View style={styles.form}>
            <Text style={styles.message}>
              Deseja realizar uma recarga?
            </Text>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                QUANTIDADE DE PASSE
              </Text>
              <LongInput />
            </View>

            <Text style={styles.label}>
              FORMA DE PAGAMENTO
            </Text>
            <LongButton
              title="Recarregar"
            />
          </View>
        </View>
      </View>
    </Background>
  )
}