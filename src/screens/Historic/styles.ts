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
    marginBottom: 40,
  },
  title: {
    color: theme.colors.greenDark,
    fontFamily: theme.fonts.text700,
    fontSize: 32,
    marginLeft: 21,
  },
  recharge: {
    marginBottom: 20,
  }
})