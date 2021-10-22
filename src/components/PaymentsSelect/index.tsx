import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { payments } from '../../utils/payments';
import { styles } from "./styles";
import { CardPayments } from "../CardPayments";
type Props = {
  paymentSelected: string;
  setPayment: (paymentId: string) => void;
  hasCheckBox?: boolean;
}

export const option = "0"

export function PaymentsSelect({
  paymentSelected,
  setPayment,
  hasCheckBox = false,
}: Props) {
  return (
    <View
      style={styles.container}
    >
      {
        payments.map(payment => (
          <CardPayments
            key={payment.id}
            title={payment.title}
            icon={payment.icon}
            checked={payment.id === paymentSelected}
            onPress={() => setPayment(payment.id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }
    </View>
  )
}