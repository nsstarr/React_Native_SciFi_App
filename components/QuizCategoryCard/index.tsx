import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ImageBackground,
  Pressable,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/dev"; 

const QuizCategoryCard = (props: CategoryProps) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    LobsterTwo_700Bold_Italic,
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>
  }


  return (
    <Pressable
      style={[styles.container]}
      onPress={() => {
        props.navigation.navigate("QuizPage");
      }}
    >
      <ImageBackground
        source={props.image as any}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <Text style={styles.buttonText}>{props.name}</Text>
      </ImageBackground>
    </Pressable>
  );
};

type CategoryProps = {
  name: string;
  navigation: any;
  image: string;
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 125,
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
    // backgroundColor: "grey",
    ...Platform.select({
      ios: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buttonText: {
    color: "#ffff",
    alignSelf: "center",
    margin: "auto",
    justifyContent: "center",
    marginTop: "20%",
    fontSize: 32,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    fontFamily: "Montserrat_400Regular",
  },
});

export default QuizCategoryCard;
