import React from "react";
import { SvgProps } from "react-native-svg";
import { Text, View } from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string,
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}

export function CardPayments({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  return (
    <RectButton
      {...rest}
      style={[styles.container, { backgroundColor: checked ? theme.colors.green : theme.colors.whiteLight }]}
    >
      <Icon />
      <Text style={[styles.title, { color: checked ? theme.colors.whiteLight : theme.colors.gray500 }]}>
        {title}
      </Text>
    </RectButton>
  )
}