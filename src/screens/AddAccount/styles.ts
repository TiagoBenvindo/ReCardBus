import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  header: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 66,
    marginBottom: 50,
  },
  textHeader: {
    fontSize: 32,
    fontFamily: theme.fonts.text700,
    color: theme.colors.gray800,
    paddingLeft: 11,
  },
  textInput: {
    fontSize: 12,
    fontFamily: theme.fonts.text400,
    color: theme.colors.gray500,
    marginBottom: 4,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 16,
  },
  form: {
    width: "100%",
    marginBottom: 16,
  }
})