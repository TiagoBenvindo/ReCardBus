import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
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
  const { singIn, user } = useAuth();

  async function loginUser() {
    try {
      await singIn(email, password);
      if (user) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error)
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
            onPress={loginUser}
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
