import React from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { DataTable } from "react-native-paper";

export function Tariffs() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <BorderlessButton onPress={handleGoHome}>
            <Feather
              name='arrow-left'
              size={32}
              color={theme.colors.greenDark}
            />
          </BorderlessButton>
          <Text style={styles.title}>
            Tarifas
          </Text>
        </View>
        <View style={styles.content}>
          <DataTable>
            <DataTable.Header style={styles.headerTable}>
              <DataTable.Title>Quantidade</DataTable.Title>
              <DataTable.Title>Valor</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>1</DataTable.Cell>
              <DataTable.Cell>R$1.35</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>2</DataTable.Cell>
              <DataTable.Cell>R$2.70</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

        </View>
      </View>
    </Background>
  )

}