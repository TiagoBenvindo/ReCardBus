import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Alert } from "react-native";
import { AxiosResponse } from 'axios'
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { Recharge } from "../../components/Recharge";
import { theme } from "../../global/styles/theme";
import { api } from '../../services/api'
import { styles } from "./styles";

interface Recharge {
  id: string
  priceTotal: number
  date: { _seconds: number, _nanoseconds: number },
  amountTicket: number
}

interface ResponseData {
  status: string
  data: Recharge[]
}

export function Historic() {
  const navigation = useNavigation();
  const [recharges, setRecharges] = useState<Recharge[]>([])

  function handleGoHome() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    async function loadRecharges() {
      let response: AxiosResponse

      try {
        response = await api.get('recharges/8e55091')
        const { data, status } = response.data as ResponseData

        if (status === 'error') throw new Error()

        setRecharges(data)
      } catch {
        const messageError = 'Erro ao carregar as recargas vindas da API'
        console.error(messageError)
        Alert.alert(messageError)
      }
    }

    loadRecharges()
  }, [])

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
            Histórico
          </Text>
        </View>
        <View style={styles.recharge}>
          {recharges.map(recharge => (
            <Recharge
              key={recharge.id}
              id={recharge.id}
              payment="Cartão"
              value={recharge.priceTotal}
              date={recharge.date._seconds}
            />
          ))}
        </View>
      </View>
    </Background>
  )
}