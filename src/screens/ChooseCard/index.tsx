import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { LongButton } from "../../components/LongButton";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function ChooseCard() {
  const navigation = useNavigation();
  const [activeRadio, setActiveRadio] = useState('')
  const [student] = useState('student')
  const [express] = useState('express')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um cartão</Text>
      <View style={styles.cardRadios}>
        <View style={styles.containerRadio}>
          <RadioButton
            uncheckedColor={theme.colors.greenDark}
            color={theme.colors.green}
            value={student}
            status={activeRadio === 'student' ? 'checked' : 'unchecked'}
            onPress={() => setActiveRadio('student')}
          />
          <Text style={styles.label}>Estudantil</Text>
        </View>
        <View style={{ ...styles.containerRadio, marginTop: 16 }}>
          <RadioButton
            uncheckedColor={theme.colors.greenDark}
            value={express}
            color={theme.colors.green}
            status={activeRadio === "express" ? "checked" : "unchecked"}
            onPress={() => setActiveRadio('express')}
          />
          <Text style={styles.label}>Expresso</Text>
        </View>
      </View>
      <View style={{ marginTop: 32 }}>
        <LongButton title={"Avançar"} onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}
