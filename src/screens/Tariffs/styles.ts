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
  title: {
    color: theme.colors.greenLight,
    fontFamily: theme.fonts.text700,
    fontSize: 32,
    marginLeft: 21,
  },
  content: {

  },
})