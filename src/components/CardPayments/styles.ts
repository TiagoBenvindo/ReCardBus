import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,

  },
  title: {
    fontSize: 12,
    fontFamily: theme.fonts.text500,
    
  }
})