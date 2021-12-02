import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import CheckCircle from "../../assets/check_circle.svg";
import { SvgProps } from "react-native-svg";

type Props = {
  id: string;
  payment: string;
  value: number;
  date: number;
};

export function Recharge({ id, payment, value, date }: Props) {
  function convertSecondsToDate(seconds: number) {
    const date = new Date();

    date.setTime(seconds * 1000);

    return date.toLocaleDateString();
  }

  function formatDate(date: string) {
    const dateObject = new Date(date);

    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon}>
          <CheckCircle height={33} width={33} />
        </View>
        <View style={styles.header}>
          <Text style={styles.id}># {id.substring(0, 4)}</Text>
          <Text style={styles.payments}>{payment}</Text>
          <Text style={styles.value}>R${value.toString().substring(0.5)}</Text>
        </View>
        <View>
          <Text style={styles.data}>
            {formatDate(convertSecondsToDate(date))}
          </Text>
        </View>
      </View>
    </View>
  );
}
