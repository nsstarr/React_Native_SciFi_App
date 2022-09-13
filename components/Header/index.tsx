import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';
import fonts from '../../styles'
import {
  useFonts,
  Montserrat_400Regular,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/dev";

const Header = (props: HeaderProps) => {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    LobsterTwo_700Bold_Italic,
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>
  }
    return (
      <View style={styles.container}>
        <View></View>
        <Text style={fonts.titleFonts}>Trivia Quiz</Text>
        <Image
          source={props.avatar as any}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
    );
}

type HeaderProps = {
    avatar?: string|null, 
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // position: 'absolute',
    // width: 100,
    // height: 50,
    // marginTop: 0,
    marginTop: 50,
    padding: 10,
    backgroundColor: '#211f3d',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header