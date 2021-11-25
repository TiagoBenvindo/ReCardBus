import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  title: {
    marginTop: 168,
    fontSize: 32,
    fontFamily: theme.fonts.text700,
    color: theme.colors.greenDark,
  },

  cardRadios: {
    marginTop: 32,
    padding: 24,
    backgroundColor: theme.colors.whiteLight,
    borderRadius: 6,
  },

  containerRadio: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    color: theme.colors.gray500,
  },
});
