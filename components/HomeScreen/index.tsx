import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Header";
import QuizCategoryCard from "../QuizCategoryCard";
import {images, GetImage} from "../../utilities/images"
import {questionsData, } from "../../utilities/QuestionsData"
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/dev"; 


type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: undefined
}

type Props = NativeStackScreenProps<StackTypes, 'Home'>

const HomeScreen = ({navigation}:Props) => {

//   const slides = {
//     avatar: require("../../assets/profile_picture.png")
//   }

  const avatar = GetImage(`image${0}`,images)

  const quizCard = GetImage(`image${0}`,questionsData)

  console.log(avatar);

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
        <Header avatar={avatar} />
        
        <ImageBackground source = {require('../../assets/Vector1.png')} resizeMode="stretch" style = {{width: '100%', height: 100, justifyContent: 'center'}}>
       <Text style = {style.quizText}>Your Quizzes</Text>
       </ImageBackground>
        <ScrollView>
          {/* Add .map() later on when more quizzed are added */}
          <QuizCategoryCard
            name="Quiz 1"
            navigation={navigation}
            image={quizCard!}
          />
          <QuizCategoryCard
            name="Quiz 2"
            navigation={navigation}
            image={quizCard!}
          />
          <QuizCategoryCard
            name="Quiz 3"
            navigation={navigation}
            image={quizCard!}
          />
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
    alignSelf: 'center'
    
  },
});

export default HomeScreen;
