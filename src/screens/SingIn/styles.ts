import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    top: 128,

  },
  textTitle: {
    width: 167,
    height: 42,
    fontFamily: theme.fonts.text,
    fontSize: 32,
    color: '#1C3B22',
  }
})