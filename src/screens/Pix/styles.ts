import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    marginBottom: 24
  },
  main: {
    flex: 1,
    alignItems: "center",
  },
  number: {
    marginTop: 8,
    fontFamily: theme.fonts.text500,
    fontSize: 14,
    color: theme.colors.gray700,
  },

})