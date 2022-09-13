import React from "react";
import { View, Text, ScrollView, StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Header";
import QuizCategoryCard from "../QuizCategoryCard";
import {images, GetImage} from "../../utilities/images"
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

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
  console.log(avatar);
  return (
    <LinearGradient colors={["rgba(75,0,130,1)","rgba(75,0,130,0.64)","rgba(75,0,130,0.64)","rgba(75,0,130,1)"]} style={{height:"100%"}}>
        <View style={style.whiteRectangle}></View>
    <View>
      <Header avatar={avatar}/>
      <ScrollView>
        {/* Add .map() later on when more quizzed are added */}
        <QuizCategoryCard name="Sci-Fi" navigation = {navigation} />
        <QuizCategoryCard name="Sci-Fi" navigation = {navigation} />
        <QuizCategoryCard name="Sci-Fi" navigation = {navigation} />
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
