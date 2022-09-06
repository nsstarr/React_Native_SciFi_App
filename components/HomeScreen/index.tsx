import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../Header";
import QuizCategoryCard from "../QuizCategoryCard";
import { images, GetImage} from '../../utilities/QuestionsData'

const HomeScreen = () => {

//   const slides = {
//     avatar: require("../../assets/profile_picture.png")
//   }

  const avatar = GetImage(`image${1}`)
  console.log(avatar);
  return (
    <View>
      <Header avatar={avatar}/>
      <ScrollView>
        {/* Add .map() later on when more quizzed are added */}
        <QuizCategoryCard name="Sci-Fi" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
