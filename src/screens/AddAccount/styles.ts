import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 66,
    marginBottom: 50,
  },
  textHeader: {
    fontSize: 32,
    fontFamily: theme.fonts.text700,
    color: theme.colors.gray100,
    paddingHorizontal: 11,
  },
  content: {
    alignItems: "center",
  },
  textInput: {
    fontSize: 12,
    fontFamily: theme.fonts.text400,
    color: theme.colors.gray400,

  }
})