import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    color: theme.colors.gray800,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middleButton: {
    width: '45%',
  }


})