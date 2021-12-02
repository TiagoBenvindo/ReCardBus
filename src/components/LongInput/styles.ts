import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,
    backgroundColor: theme.colors.whiteLight,
    color: theme.colors.gray800,
    fontFamily: theme.fonts.text400,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E9F0EB',
    fontSize: 13,
    padding: 16,
  }
});