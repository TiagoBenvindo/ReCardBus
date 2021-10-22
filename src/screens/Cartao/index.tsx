import React from "react";
import codigoBarras from "../../assets/codigoBarras.png";
import { Text, View, Image } from "react-native";
import { LongButton } from "../../components/LongButton";

export function Cartao() {
  return (
    <View >
      <Text>
        Código de barras
      </Text>
      <Image
        source={codigoBarras}
        style={{ width: 312, height: 94 }}
      />
      <Text>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </Text>
      <LongButton
        title="Copiar código"
      />
    </View>
  )
}