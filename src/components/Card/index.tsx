import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string,
  content: string,
}


export function Card({
  title,
  content
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.content}>
        {content}
      </Text>
    </View>
  )
}