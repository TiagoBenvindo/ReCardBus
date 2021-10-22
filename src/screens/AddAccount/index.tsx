import React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongInput } from "../../components/LongInput";
import { LongButton } from "../../components/LongButton";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";

export function AddAccount() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.header}>
              <BorderlessButton onPress={handleGoBack}>
                <Feather
                  name='arrow-left'
                  size={32}
                  color={theme.colors.gray500}
                />
              </BorderlessButton>
              <Text style={styles.textHeader}>
                Criar conta
              </Text>
            </View>
            <View style={styles.form} >
              <View style={styles.inputGroup}>
                <Text style={styles.textInput}>
                  NOME COMPLETO
                </Text>
                <LongInput />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.textInput}>
                  CPF(SOMENTE NÚMEROS)
                </Text>
                <LongInput keyboardType="numeric" />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.textInput}>
                  EMAIL
                </Text>
                <LongInput />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.textInput}>
                  SENHA
                </Text>
                <LongInput secureTextEntry />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.textInput}>
                  CONFIRMAR SENHA
                </Text>
                <LongInput secureTextEntry />
              </View>
              <View
                style={{ marginTop: 24 }}
              >
                <LongButton
                  title="Criar"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background >
  );
}
