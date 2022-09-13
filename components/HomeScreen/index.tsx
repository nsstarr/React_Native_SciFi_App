import React from "react";
import { View, Text, ScrollView, StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Header";
import QuizCategoryCard from "../QuizCategoryCard";
import {images, GetImage} from "../../utilities/images"
import {questionsData} from "../../utilities/QuestionsData"
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Svg, {Use,Image} from "react-native-svg"
import SvgIcon from "../../assets/Vector1.svg"

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
  return (
    <LinearGradient colors={["rgba(75,0,130,1)","rgba(75,0,130,0.64)","rgba(75,0,130,0.64)","rgba(75,0,130,1)"]} style={{height:"100%"}}>
        <View style={style.whiteRectangle}></View>
    <View>
      <Header avatar={avatar}/>
      {/* <Svg width="100%" height="15%" viewBox="0 0 100 100"></Svg> */}
      {/* <SvgIcon height={100} width={100} /> */}
      <ScrollView>
        {/* Add .map() later on when more quizzed are added */}
        <QuizCategoryCard name="Quiz 1" navigation = {navigation} image={quizCard!}/>
        <QuizCategoryCard name="Quiz 2" navigation = {navigation} image={quizCard!}/>
        <QuizCategoryCard name="Quiz 3" navigation = {navigation} image={quizCard!}/>
      </ScrollView>
    </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  // container:{
  //   backgroundColor:"linear-gradient(rgba(75,0,130,1),rgba(255,255,255,1))",
  //   height:"100%"
  // }
  whiteRectangle:{
    width: "90%",
    height:"50%",
    borderRadius : 20,
    backgroundColor: "#FFFFFF",
    zIndex: 0,
    position: "absolute",
    alignSelf: "center",
    marginTop: 180
  }
})

export default HomeScreen;
