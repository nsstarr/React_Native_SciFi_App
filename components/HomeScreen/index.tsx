import React from "react";
import { View, Text, ScrollView } from "react-native";
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
    <View>
      <Header avatar={avatar}/>
      <ScrollView>
        {/* Add .map() later on when more quizzed are added */}
        <QuizCategoryCard name="Sci-Fi" navigation = {navigation} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
