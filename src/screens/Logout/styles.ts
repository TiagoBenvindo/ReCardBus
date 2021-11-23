import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    color: theme.colors.gray800,
    paddingTop: 11,
    marginBottom: 32,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middleButton: {
    width: '45%',
  },
  button: {

    height: 56,
    backgroundColor: theme.colors.whiteLight,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.green,
    borderWidth: 2,
  },
  titleButton: {
    flex: 1,
    color: theme.colors.green,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.text700,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },


})