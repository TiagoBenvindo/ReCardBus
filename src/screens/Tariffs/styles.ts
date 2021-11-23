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
  },
  title: {
    color: theme.colors.greenDark,
    fontFamily: theme.fonts.text700,
    fontSize: 32,
    marginLeft: 21,
  },
  content: {
    marginTop: 36,
  },
  headerTable: {
    backgroundColor: theme.colors.green,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  headerTableText: {
    fontFamily: theme.fonts.text700,
    fontSize: 12,
    color: theme.colors.whiteLight,
  }
})