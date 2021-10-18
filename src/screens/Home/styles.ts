import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 56,
  },
  presentation: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 32,
    fontFamily: theme.fonts.text400,
    color: theme.colors.gray100,
  },
  name: {
    fontSize: 32,
    fontFamily: theme.fonts.text700,
    color: theme.colors.green100,
  },
  card: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {
    marginTop: 40,
  },
  inputGroup: {
    marginTop: 24,
  },
  message: {
    fontFamily: theme.fonts.text500,
    fontSize: 18,
    color: theme.colors.gray100,
  },
  label: {
    fontFamily: theme.fonts.text500,
    fontSize: 12,
    color: theme.colors.gray200,
    marginBottom: 4,
  }
})