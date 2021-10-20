import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { Card } from "../../components/Card";
import { LongButton } from "../../components/LongButton";
import { LongInput } from "../../components/LongInput";
import { PaymentsSelect } from "../../components/PaymentsSelect";
import { styles } from "./styles";


export function Home() {
  const [payment, setPayment] = useState('');
  const [quantPass, setQuantPass] = useState('');
  const [total, setTotal] = useState('');
  const [openDataBox, setOpenDataBox] = useState();
  const passe = '1,35';


  function handleOpenOrCloseBox() {
    if (quantPass === '') {
      setOpenDataBox(false);
    } else {
      const totalTemp = Number(quantPass) * 1.35;
      setTotal(totalTemp.toFixed(2).toString().replace('.', ','));
      setOpenDataBox(true);
    }
  }

  function handlePaymentSelect(paymentId: string) {
    setPayment(paymentId)
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View style={styles.presentation}>
              <Text style={styles.greeting}>
                Olá,
              </Text>
              <Text style={styles.name}>
                Marcos
              </Text>
            </View>
            <View style={styles.card}>
              <Card
                title={'Saldo atual'}
                content={'R$39,00'}
              />
              <Card
                title={'Quantidade de passes'}
                content={'30'}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.message}>
                Deseja realizar uma recarga?
              </Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  QUANTIDADE DE PASSE
                </Text>
                <LongInput
                  placeholder="Ex: 10"
                  keyboardType="numeric"
                  onChangeText={setQuantPass}
                  onEndEditing={handleOpenOrCloseBox}
                />
              </View>
              <Text style={styles.label}>
                FORMA DE PAGAMENTO
              </Text>
              <View style={styles.payments}>
                <PaymentsSelect
                  hasCheckBox
                  setPayment={handlePaymentSelect}
                  paymentSelected={payment}
                />
              </View>
              {
                openDataBox ?
                  <View style={styles.paymentData}>
                    <View style={styles.textRow}>
                      <Text style={styles.info}>QUANTIDADE DE PASSES </Text>
                      <Text style={styles.value}>{quantPass}</Text>
                    </View>
                    <View style={styles.textRow}>
                      <Text style={styles.info}>VALOR DO PASSE</Text>
                      <Text style={styles.value}>x R${passe}</Text>
                    </View>
                    <View style={styles.textRow}>
                      <Text style={styles.info}>VALOR TOTAL</Text>
                      <Text style={styles.value}>R${total}</Text>
                    </View>
                  </View>
                  : <></>
              }
              <LongButton
                title="Recarregar"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>

  )
}