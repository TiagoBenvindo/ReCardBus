import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '80%',
    backgroundColor: theme.colors.whiteDefault,
    opacity: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,

  }
})