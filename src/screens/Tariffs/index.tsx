import React from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function Tariffs() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('SingIn');
  }

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <BorderlessButton onPress={handleGoHome}>
            <Feather
              name='arrow-left'
              size={32}
              color={theme.colors.green100}
            />
          </BorderlessButton>
          <Text style={styles.title}>
            Tarifas
          </Text>
        </View>
        <View style={styles.content}>

        </View>
      </View>
    </Background>
  )

}