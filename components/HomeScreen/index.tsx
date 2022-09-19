import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Header";
import QuizCategoryCard from "../QuizCategoryCard";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/dev";
import { quizzes, QuizzesType } from "../../utilities/Quizzes";

type StackTypes = {
  Home: undefined;
  QuizPage: QuizzesType;
  ResultsPage: undefined;
};

type Props = NativeStackScreenProps<StackTypes, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={[
        "rgba(75,0,130,1)",
        "rgba(75,0,130,0.64)",
        "rgba(75,0,130,0.64)",
        "rgba(75,0,130,1)",
      ]}
      style={{ height: "100%" }}
    >
      <View style={style.whiteRectangle}></View>
      <View>
        <Header navigation={navigation} />

        <ImageBackground
          source={require("../../assets/Vector1.png")}
          resizeMode="stretch"
          style={{ width: "100%", height: 100, justifyContent: "center" }}
        >
          <Text style={style.quizText}>Your Quizzes</Text>
        </ImageBackground>
        <ScrollView>
          {quizzes.map((quiz) => {
            let cardData = quiz.quizCardData;
            return (
              <QuizCategoryCard
                key={cardData.name}
                name={cardData.name}
                image={cardData.image}
                navigation={navigation}
                data={quiz}
              />
            );
          })}
          <View style={style.container}>
            <ImageBackground
              source={require("../../assets/FireflyQuiz/firefly-poster.jpeg")}
              resizeMode="cover"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <Text style={style.buttonText}>Coming Soon</Text>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  whiteRectangle: {
    width: "90%",
    height: "50%",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    zIndex: 0,
    position: "absolute",
    alignSelf: "center",
    marginTop: 220,
  },
  quizText: {
    fontFamily: "Montserrat_700Bold",
    color: "#ffff",
    fontSize: 32,
    alignSelf: "center",
  },
  container: {
    width: 300,
    height: 125,
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
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
    marginTop: "15%",
    fontSize: 28,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    fontFamily: "Montserrat_400Regular",
  },
});

export default HomeScreen;
