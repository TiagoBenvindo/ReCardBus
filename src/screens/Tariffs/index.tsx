import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { AxiosResponse } from 'axios'
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { DataTable } from "react-native-paper";
import jsStudent from "../../mock/tarrifs/student.json";
import { api } from "../../services/api";

interface Tariff {
  id: string
  type: string
  amount: number
  value: string
}

interface ResponseData {
  status: string,
  data: Tariff[]
}

export function Tariffs() {
  const navigation = useNavigation();
  const [tariffs, setTariffs] = useState<Tariff[]>([])

  function handleGoHome() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    async function loadTariffs() {
      let response: AxiosResponse

      try {
        response = await api.get('tariffs/express')

        const { data, status } = response.data as ResponseData

        if (status === 'error') throw new Error()

        setTariffs(data)
      } catch {
        const messageError = 'Erro ao carregar as tarifas vindas da API'
        console.error(messageError)
        Alert.alert(messageError)
      }
    }

    loadTariffs()
  }, [])

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
                tariffs.map(item => (
                  <DataTable.Row key={item.id}>
                    <DataTable.Cell>{item.amount}</DataTable.Cell>
                    <DataTable.Cell>{item.value}</DataTable.Cell>
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