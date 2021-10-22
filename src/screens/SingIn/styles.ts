import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 128,
  },
  textTitle: {
    width: "100%",
    textAlign: "center",
    height: 42,
    fontFamily: theme.fonts.text700,
    fontSize: 32,
    color: '#1C3B22',
    marginBottom: 56,
  },
  label: {
    fontSize: 13,
    fontFamily: theme.fonts.text500,
    color: theme.colors.gray400,
    marginBottom: 4,
  },
  sectionNewAccount: {
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
  },
  textAgroupButton: {
    color: theme.colors.gray500,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: theme.fonts.text400,
  },
  textButton: {
    marginTop: 12,
    fontSize: 15,
    fontFamily: theme.fonts.text700,
    color: theme.colors.green400,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 24,
  }
})