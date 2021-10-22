import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    marginBottom: 24
  },
  number: {
    marginTop: 8,
    fontFamily: theme.fonts.text500,
    fontSize: 14,
    alignItems: 'center',
  }

})