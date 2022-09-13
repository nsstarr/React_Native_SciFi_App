import {StyleSheet} from 'react-native';

import {
  useFonts,
  Montserrat_400Regular,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/dev";


const fonts = StyleSheet.create({
  defaultFonts: {
    fontFamily: Montserrat_400Regular,
    color: "#FFFFFF",
  },
  titleFonts: {
    fontFamily: LobsterTwo_700Bold_Italic,
    color: "#EFA80C",
    fontSize: 48,
  },
});

export default fonts;