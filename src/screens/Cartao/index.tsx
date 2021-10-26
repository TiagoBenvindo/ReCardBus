import React from "react";
import codigoBarras from "../../assets/codigoBarras.png";
import { Text, View, Image } from "react-native";
import { LongButton } from "../../components/LongButton";
import { styles } from "./styles";
import { LongInput } from "../../components/LongInput";

export function Cartao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Adicionar Cartão
      </Text>
      <View style={styles.form}>
        <Text style={styles.label}>
          NOME DE TITULAR
        </Text>
        <LongInput />
        <Text style={styles.label}>
          NÚMERO DO CARTÃO
        </Text>
        <LongInput />
        <View style={styles.inputGroupRow}>
          <View style={styles.middleInput}>
            <Text style={styles.label}>
              DATA DE VENCIMENTO
            </Text>
            <LongInput />
          </View>
          <View style={styles.middleInput}>
            <Text style={styles.label}>
              CVV
            </Text>
            <LongInput />
          </View>
        </View>
      </View>
      <LongButton
        title="Copiar código"
      />
    </View>
  )
}