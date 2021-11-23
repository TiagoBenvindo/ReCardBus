import React from "react";
import { View, Text } from "react-native";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { DataTable } from "react-native-paper";
import jsStudent from "../../mock/tarrifs/student.json"

export function Tariffs() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <ScrollView>
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
                <DataTable.Title><Text style={styles.headerTableText}>QUANTIDADE</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.headerTableText}>VALOR</Text></DataTable.Title>
              </DataTable.Header>
              {
                jsStudent.map(item => (
                  <DataTable.Row>
                    <DataTable.Cell>{item.amount}</DataTable.Cell>
                    <DataTable.Cell>{item.price}</DataTable.Cell>
                  </DataTable.Row>
                ))

              }


            </DataTable>

          </View>
        </View>
      </ScrollView>
    </Background>
  )

}