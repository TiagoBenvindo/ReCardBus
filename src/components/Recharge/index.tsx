import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import CheckCircle from "../../assets/check_circle.svg";
import { SvgProps } from "react-native-svg";


export function Recharge() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon}>
          <CheckCircle
            height={33}
            width={33}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.id}>#5450</Text>
          <Text style={styles.payments}>Cartão</Text>
          <Text style={styles.value}>R$39.90</Text>
        </View>
        <View>
          <Text style={styles.data}>19/11/2021</Text>
        </View>
      </View>
    </View>
  )
}