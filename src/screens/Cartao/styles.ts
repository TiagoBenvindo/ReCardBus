import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    marginBottom: 8
  },
  form: {
    flex: 1,
  },
  label: {
    fontFamily: theme.fonts.text500,
    fontSize: 12,
    color: theme.colors.gray600,
    marginBottom: 4,
    marginTop: 16,
  },
  middleInput: {
    width: "45%"
  },
  inputGroupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})