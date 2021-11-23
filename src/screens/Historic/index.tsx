import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Recharge } from "../../components/Recharge";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Historic() {
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
            Histórico
          </Text>
        </View>
        <Recharge />
      </View>
    </Background>
  )
}