import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: theme.colors.whiteLight,
    width: "100%",
    padding: 16,
    height: 96,
  },
  content: {
    flexDirection: "row",
  },
  icon: {
    backgroundColor: theme.colors.greenLight,
    borderRadius: 6,
    marginRight: 16,
    height: 64,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
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
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: theme.colors.gray500,
  },
})