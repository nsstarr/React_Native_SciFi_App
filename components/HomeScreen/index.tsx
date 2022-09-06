import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../Header";
import QuizCategoryCard from "../QuizCategoryCard";

const HomeScreen = () => {

  const slides = {
    avatar: require("../../assets/profile_picture.png")
  }

  return (
    <View>
      <Header avatar={slides.avatar}/>
      <ScrollView>
        {/* Add .map() later on when more quizzed are added */}
        <QuizCategoryCard name="Sci-Fi" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
