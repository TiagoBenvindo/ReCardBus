import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: theme.colors.whiteLight,
    width: "100%",
    height: 96,
  },
  icon: {
    backgroundColor: theme.colors.greenLight,
    borderRadius: 6,
    marginRight: 16,
  },
  content: {
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  id: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.greenDark,
  },
  data: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: theme.colors.gray500,
  },
  payments: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: theme.colors.gray500,
    marginBottom: 4
  },
  value: {

  },
})