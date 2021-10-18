import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 144,
    height: 75,
    backgroundColor: theme.colors.green400,
    borderRadius: 6,
    paddingTop: 12
  },
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 10,
    color: theme.colors.whiteDefault,
    paddingLeft: 12,
    marginBottom: 8,
  },
  content: {
    fontFamily: theme.fonts.text500,
    fontSize: 23,
    color: theme.colors.whiteLight,
    paddingLeft: 12,
  },
})