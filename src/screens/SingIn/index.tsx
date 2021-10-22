import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongInput } from "../../components/LongInput";
import { LongButton } from "../../components/LongButton";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hook/auth";


export function SingIn() {
  const navigation = useNavigation();
  const [email, setCpf] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    const user = await useAuth(email, password);
    if (user) {
      console.log('Passando para a tela home' + user)
      navigation.navigate('Home', { userId: user })
    }
  }


  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          Recardbus
        </Text>
        <View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>EMAIL</Text>
            <LongInput
              onChangeText={setCpf}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>SENHA</Text>
            <LongInput
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>
          <LongButton
            title='Entrar'
            onPress={login}
          />

        </View>
        <View style={styles.sectionNewAccount}>
          <Text style={styles.textAgroupButton}>
            Ainda não possui uma conta?
          </Text>
          <Text
            style={styles.textButton}
            onPress={() => navigation.navigate("AddAccount")}
          >
            Crie uma agora
          </Text>
        </View>
      </View>
    </Background>
  );
}
