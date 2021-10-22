import React from "react";
import codigoBarras from "../../assets/codigoBarras.png";
import { Text, View, Image } from "react-native";
import { LongButton } from "../../components/LongButton";
import { styles } from "./styles";

export function BarCode() {
  return (
    <View >
      <Text style={styles.title}>
        Código de barras
      </Text>
      <Image
        source={codigoBarras}
        style={{ width: "100%", height: 94 }}
      />
      <Text style={styles.number}>
        03399.63290 64000.000006 00125.201020 4 56140000017832
      </Text>
      <View style={{ alignItems: 'center' }}>
        <LongButton
          title="Copiar código"
        />
      </View>
    </View>
  )
}