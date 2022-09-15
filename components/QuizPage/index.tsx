import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground, Pressable } from "react-native";
import HeaderNoProfile from "../HeaderNoProfile";
import QuizAnswer from "../QuizAnswer";
import QuizQuestion from "../QuizQuestion";
import QuizPicture from "../QuizPicture";
import { questionsData } from "../../utilities/QuestionsData";
import { GetImage } from "../../utilities/images";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
import * as Progress from "react-native-progress";
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/dev";
import { LinearGradient } from "expo-linear-gradient";


type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: undefined;
};

type RadioProps = RadioButtonProps & {
  name?: string;
};

type PaginationProps = {
  index: number;
  total: number;
};
type Props = NativeStackScreenProps<StackTypes, "QuizPage">;


const QuizPage = ({ route, navigation }: Props) => {
  const [answerTracker, setAnswerTracker] = useState({});
  const [test, setTest] = useState("");


  function testQuestion() {
    setTest("test");
  }

  function onPressRadioButton(radioButtonsArray: RadioProps[]) {
    let answer = radioButtonsArray.filter((object) => {
      if (object.selected) {
        return object;
      }
    });
    setAnswerTracker({
      ...answerTracker,
      [answer[0].name as string]: answer[0].value,
    });
    console.log(radioButtonsArray);
  }

  function checkAnswers() {
    console.log(answerTracker);
  }

  function renderPagination(index: number, total: number) {
    return (
      <Progress.Bar progress={index / (total - 1)} width={null} height={15} color="#4B0082" style={{borderRadius:30, backgroundColor:"#D4BBE5"}}/>
    );
  }
  
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>;
  }
  return (
    <Swiper
      loop={false}
      renderPagination={renderPagination as any}
      showsButtons={true}
    >
      {[
        ...questionsData.map((question, key) => {
          question.answers!.forEach((answer,i) =>{
            question.answers![i].labelStyle = styles.answerText;
            question.answers![i].containerStyle = styles.answerBackground;
            question.answers![i].color = "#EFA80C"
          })
          return (
            <View style={styles.screen} key={question.name}>
              <HeaderNoProfile />
              <View style={styles.quizQuestion}>
                <QuizPicture source={question.image} />
                <QuizQuestion question={question.question!} />
                <RadioGroup
                  radioButtons={question.answers!}
                  onPress={onPressRadioButton}
                />
                <Button onPress={checkAnswers} title="Check"></Button>
              </View>
            </View>
          );
        }),
          <LinearGradient colors={["rgba(75,0,130,1)",
        "rgba(75,0,130,0.64)"]} style={styles.finalPage}>


          <HeaderNoProfile />
          <View style={styles.finalPageContent}>
          <ImageBackground source = {require('../../assets/Vector1.png')} resizeMode="stretch" style = {{width: '100%', height: 200, justifyContent: 'center'}}>
       <Text style={styles.finalPageText}>Your have reached the end of the quiz. If you are finished, press the button below to see your results</Text>
       </ImageBackground>
            <Pressable onPress={() => {
              navigation.navigate("ResultsPage",answerTracker);
            }} style={styles.button}>
              <Text style={styles.buttonText}>To results</Text>
            </Pressable>
          </View>

            </LinearGradient>
      ]}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  screen: {},
  quizQuestion: {
    marginTop: 50,
    alignItems: "center",
  },
  answerBackground: {
    marginTop: 10,
    height: 50,
    width: 200,
    borderRadius: 20,
    padding: 10,
  },
  answerText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  finalPageText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 24,
    color: "#ffffff",
    textShadowOffset: {width:0,height:0},
    textShadowColor: "#000000",
    textShadowRadius: 4,
    textAlign:"center"
  },
  finalPage:{
    height: "100%",
  },
  finalPageContent:{
    marginTop: 120,
  },
  button:{
    backgroundColor: "#EFA80C",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: "auto",
    width: 160,
    marginBottom: 60,
    textAlignVertical: "center",
    textAlign: "center"
  },
  buttonText:{
    color:"#FFFFFF",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    padding: 10,
    textAlignVertical: "center",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center"
  }
});

export default QuizPage;
