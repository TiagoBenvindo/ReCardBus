import React, { useState } from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LongButton } from "../../components/LongButton";
import { ModalView } from "../../components/ModalView";
import { ModalViewLogout } from "../../components/ModalViewLogout";
import { styles } from "./styles";

export function Logout({ ...rest }: RectButtonProps) {
  const [openModal, setOpenModal] = useState(true)

  function handleCloseModal() {
    setOpenModal(false)
  }
  return (
    <ModalViewLogout visible={openModal} closeModal={handleCloseModal}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Deseja realmente sair?
        </Text>
        <View style={styles.form}>
          <View style={styles.middleButton}>
            <RectButton
              style={styles.button}
              {...rest}
            >
              <Text style={styles.titleButton}>
                Não
              </Text>
            </RectButton>
          </View>
          <View style={styles.middleButton}>
            <LongButton
              title="Sim"
            />
          </View>
        </View>
      </View>
    </ModalViewLogout>
  )
}