import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 56,
    paddingHorizontal: 32,
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
    marginLeft: 8,
  },
  card: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {
    marginTop: 40,
    marginBottom: 16,
  },
  inputGroup: {
    marginTop: 24,
    marginBottom: 16,
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
  },
  payments: {
    flexDirection: 'row',
    marginBottom: 20
  },
  paymentData: {
    backgroundColor: theme.colors.whiteLight,
    height: 112,
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 32,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: theme.colors.gray500,
  },
  value: {
    fontSize: 12,
    fontFamily: theme.fonts.text700,
    color: theme.colors.gray100,
  },
  line: {
    borderRadius: 1,
    borderTopColor: theme.colors.whiteDark,
  }
})