import React, {useState} from 'react'
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
// import fonts from '../../styles'
import {
  useFonts,
  Montserrat_400Regular,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/dev";

type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: {};
  Profile: undefined;
};


const Header = (props: HeaderProps) => {
  const [profilePic, setProfilePic] = useState(require("../../assets/profile_picture.png") as string)
  


  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    LobsterTwo_700Bold_Italic,
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>
  }
    return (
      <View style={styles.container}>
        <Text style={styles.titleFonts}>Trivia Quiz</Text>
        <Pressable
          onPress={() => {
            props.navigation.navigate("Profile",{saveProfile:setProfilePic, preview:profilePic});
          }}
        >
          <Image
            source={profilePic as any}
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 50 }}
          />
        </Pressable>
      </View>
    );
}

type HeaderProps = {
    navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // position: 'absolute',
    width: '100%',
    height: 70,
    // marginTop: 0,
    padding: 10,
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  defaultFonts: {
    fontFamily: "Montserrat_400Regular",
    color: "#FFFFFF",
  },
  titleFonts: {
    fontFamily: "LobsterTwo_700Bold_Italic",
    color: "#EFA80C",
    fontSize: 48,
  },
});


export default Header