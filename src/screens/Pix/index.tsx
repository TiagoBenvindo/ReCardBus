import React from "react";
import qrCode from "../../assets/qrCode.png";
import { Text, View, Image } from "react-native";
import { LongButton } from "../../components/LongButton";
import { styles } from "./styles";

export function Pix() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Código de barras
      </Text>
      <View style={styles.main}>
        <Image
          source={qrCode}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.number}>
          43.766.572/0001-99
        </Text>
      </View>
      <LongButton
        title="Copiar chave"
      />
    </View>
  )
}